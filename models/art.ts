import mongoose, { Model, Schema, model } from "mongoose";

const ArtSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

export default model("Art", ArtSchema);
