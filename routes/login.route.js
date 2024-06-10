import { Router } from "express";
import { loginMethod } from "../controllers/login.controller.js";

const router = Router();

router.post("/auth", loginMethod.getOneUser);

export default router;
