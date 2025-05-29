import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = Router();
router.use(protectRoute);
export default router;
