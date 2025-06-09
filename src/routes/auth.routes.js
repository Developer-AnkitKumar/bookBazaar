import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js";
import { validateRegister, validateLogin } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

export default router;
