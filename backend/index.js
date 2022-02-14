import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db/db.js";
import user from "./routes/user.js";
import animal from "./routes/animal.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Backend server running on port: " + process.env.PORT);
});

app.use("/api/user", user);
app.use("/api/animal", animal);

db.dbConnection();
