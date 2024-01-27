import express from "express";
import { user } from "../middlewares/user.js";

const router = express.Router();

// User Routes
router.post("/user/register", user.register);

export default router;
