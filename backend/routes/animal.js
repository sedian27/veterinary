import express from "express";
import animal from "../controllers/animal.js";

const router = express.Router();

router.post("/register", animal.register);

export default router;
