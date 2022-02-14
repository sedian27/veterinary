import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
  name: String,
  race: String,
  weight: Number,
  height: Number,
  health: { type: String, default: "healthy" },
  age: Number,
});

const animal = mongoose.model("animals", animalSchema);

export default animal;
