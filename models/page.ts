import mongoose, { Schema, model } from "mongoose";

const PageSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  links: {
    live: { type: String, required: true },
    github: { type: String, required: true },
  },
  image1: { type: String, required: true },
  image2: { type: String, required: true },
});

export default model("Page", PageSchema);
