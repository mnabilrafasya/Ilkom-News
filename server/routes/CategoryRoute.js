// routes/CategoryRoute.js
import express from "express";
import { getCategories } from "../controllers/Category.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get("/categories", verifyUser, getCategories);
export default router;
