import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).send("Invalid credentials");

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password as string
  );
  if (!isPasswordValid) return res.status(401).send("Invalid credentials");

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).send("Server error: JWT_SECRET not set.");
  }
  const token = jwt.sign({ id: user._id }, jwtSecret, {
    expiresIn: "1h",
  });

  res.send({ token });
});

export default router;
