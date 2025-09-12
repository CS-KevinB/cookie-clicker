import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// Allow frontend requests
app.use(cors());
app.use(express.json());

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

app.post("Welcome", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: "Name is required" });
  } else {
    res.json({ message: `Welcome ${name}!` });
  }
});