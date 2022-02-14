import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: { type: Boolean, default: true },
});

const user = mongoose.model("users", userSchema);

export default user;
