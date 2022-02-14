import express from "express";

import user from "../controllers/user.js";

const router = express.Router();

router.post("/register", user.registerUser);

export default router;
