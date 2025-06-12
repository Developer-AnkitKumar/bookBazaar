import express from "express";
import { login, register } from "../controllers/auth.controllers.js";
import { verifyToken, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", verifyToken, register);
router.post("/login", isAdmin, login);

export default router;
