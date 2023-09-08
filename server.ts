// imports

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import gamesRoutes from "./routes/games";
import pagesRoutes from "./routes/pages";
import artRoutes from "./routes/art";
import toysRoutes from "./routes/toys";

const app: express.Application = express();
dotenv.config();

// middleware & routes

app.use(express.json({ limit: "5mb" }));
app.use(cors());

app.get("/", (req, res) => res.send("base"));
app.use("/games", gamesRoutes);
app.use("/pages", pagesRoutes);
app.use("/art", artRoutes);
app.use("/toys", toysRoutes);

// mongo stuff
const uri = process.env.MONGO_URI as string;
mongoose
  .connect(uri, {
    connectTimeoutMS: 5000,
    socketTimeoutMS: 5000,
  })
  .then(() => {
    console.log(`Connected to Mongo!`);
  })
  .catch((error) => {
    console.error(`Error connectiong to MongoDB: ${error}`);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
