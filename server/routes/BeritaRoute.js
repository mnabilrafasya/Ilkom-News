// routes/BeritaRoute.js
import express from "express";
import multer from "multer";

import {
  getBerita,
  getBeritaById,
  getRandomBerita,
  getBeritaByCategory,
  createBerita,
  updateBerita,
  deleteBerita,
} from "../controllers/Berita.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
const upload = multer({ dest: "public/uploads/" });

// —–––– Public GET routes (spesifik dulu) —––––
router.get("/berita/random", getRandomBerita);
router.get("/berita/kategori/:slug", getBeritaByCategory);
router.get("/berita/:id", getBeritaById);
router.get("/berita", getBerita);

// —–––– Protected Admin routes —––––
router.post(
  "/berita",
  verifyUser,
  adminOnly,
  upload.single("foto"),
  createBerita
);

router.patch(
  "/berita/:id",
  verifyUser,
  adminOnly,
  upload.single("foto"),
  updateBerita
);

router.delete("/berita/:id", verifyUser, adminOnly, deleteBerita);

export default router;
