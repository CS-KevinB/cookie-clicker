import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from backend!" });
});

// User login/register
app.post("/api/users", async (req: Request, res: Response) => {
  const { name, password } = req.body as { name?: string; password?: string };

  if (!name || !password)
    return res.status(400).json({ error: "Name and password required" });

  try {
    // Fetch user with password and totalCookies
    const user = await prisma.user.findUnique({
      where: { username: name },
      select: { password: true, totalCookies: true },
    });

    if (user) {
      if (user.password === password) {
        return res.json({
          message: "Login successful! Welcome back.",
          totalCookies: user.totalCookies,
        });
      } else {
        return res.status(401).json({ error: "Incorrect password." });
      }
    } else {
      // Create new user
      const newUser = await prisma.user.create({
        data: { username: name, password, totalCookies: 0 },
        select: { totalCookies: true },
      });
      return res.json({
        message: "New user created! Welcome.",
        totalCookies: newUser.totalCookies,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get totalCookies
app.get("/api/users/:name/cookies", async (req: Request, res: Response) => {
  const { name } = req.params;
  if (!name) return res.status(400).json({ error: "Name required" });

  try {
    const user = await prisma.user.findUnique({
      where: { username: name },
      select: { totalCookies: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ totalCookies: user.totalCookies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch total cookies" });
  }
});

// Update totalCookies
app.patch("/api/users/:name/cookies", async (req: Request, res: Response) => {
  const { name } = req.params;
  const { totalCookies } = req.body as { totalCookies: number };

  if (!name || totalCookies === undefined)
    return res.status(400).json({ error: "Name and totalCookies required" });

  try {
    const updatedUser = await prisma.user.update({
      where: { username: name },
      data: { totalCookies },
      select: { totalCookies: true },
    });
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update total cookies" });
  }
});

// Get buildings
app.get("/api/users/:name/buildings", async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const buildings = await prisma.building.findMany({
      where: { user: { username: name } },
    });

    res.json(buildings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch buildings" });
  }
});


app.patch("/api/users/:name/buildings", async (req: Request, res: Response) => {
  const { name } = req.params;
  const body = req.body as {
    buildings: Array<{
      type: string;
      amount: number;
      purchased: boolean;
      basePrice: number;
      baseRate: number;
    }>;
  };

  if (!name || !body.buildings) {
    return res.status(400).json({ error: "Name and buildings required" });
  }

  try {
    // Get the user ID from the username first
    const user = await prisma.user.findUnique({
      where: { username: name },
      select: { id: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update or create buildings per user + type combo
    const updatedBuildings = await Promise.all(
      body.buildings.map((b) =>
        prisma.building.upsert({
          where: {
            userId_type: { userId: user.id, type: b.type },
          },
          update: {
            amount: b.amount,
            purchased: b.purchased,
            basePrice: b.basePrice, // updates price each time (*1.17 logic from frontend)
          },
          create: {
            userId: user.id,
            type: b.type,
            amount: b.amount,
            purchased: b.purchased,
            basePrice: b.basePrice,
            baseRate: b.baseRate,
          },
        })
      )
    );

    res.json(updatedBuildings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upsert buildings" });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
