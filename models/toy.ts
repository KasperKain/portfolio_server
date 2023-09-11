import mongoose, { Schema, model } from "mongoose";

const ToySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  live: { type: String, required: false },
  github: { type: String, required: false },
});

export default model("Toy", ToySchema);
