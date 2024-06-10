import { Router } from "express";
import { userMethod } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", userMethod.postOneUser);

export default router;
