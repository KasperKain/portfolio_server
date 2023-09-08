import mongoose, { Schema, model } from "mongoose";

const ToySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  links: {
    live: { type: String, required: true },
    github: { type: String, required: true },
  },
});

export default model("Toy", ToySchema);
