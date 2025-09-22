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
    const user = await prisma.user.findUnique({ where: { username: name } });

    if (user) {
      if (user.password === password) {
        return res.json({ message: "Login successful! Welcome back." });
      } else {
        return res.status(401).json({ error: "Incorrect password." });
      }
    } else {
      await prisma.user.create({ data: { username: name, password } });
      return res.json({ message: "New user created! Welcome." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
