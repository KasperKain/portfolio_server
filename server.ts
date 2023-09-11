import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
dotenv.config();

import gamesRoutes from "./routes/games";
import pagesRoutes from "./routes/pages";
import artRoutes from "./routes/art";
import toysRoutes from "./routes/toys";
import user from "./routes/user";

dotenv.config();
const app = express();

// Middleware
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  const jwtSecret = process.env.JWT_SECRET;

  if (!token) return res.status(403).send("Token is required");
  if (!jwtSecret)
    return res.status(500).send("Server Error: JWT_SECRET not set.");

  try {
    jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

// App Configurations
app.use(express.json({ limit: "5mb" }));
app.use(cors());
app.get("/", (req, res) => res.send("base"));
app.use("/games", gamesRoutes);
app.use("/pages", pagesRoutes);
app.use("/art", artRoutes);
app.use("/toys", toysRoutes);
app.use("/login", user);

// MongoDB Connection
const uri = process.env.MONGO_URI as string;
mongoose
  .connect(uri, {
    connectTimeoutMS: 5000,
    socketTimeoutMS: 5000,
  })
  .then(() => console.log(`Connected to Mongo!`))
  .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
