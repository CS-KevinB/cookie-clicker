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

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
