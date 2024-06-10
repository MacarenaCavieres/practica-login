import { Router } from "express";
import { apiMethod } from "../controllers/api.controller.js";
import { validateToken } from "../middlewares/token.middleware.js";

const router = Router();

router.get("/", validateToken, apiMethod.getAllApi);

export default router;
