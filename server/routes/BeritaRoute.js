import express from "express";
import {
    getBerita,
    getBeritaById,
    createBerita,
    deleteBerita,
    updateBerita
} from '../controllers/Berita.js';
import { verifyUser } from "../middleware/AuthUser.js";
import multer from "multer";
import { uploadOption } from "../utils/FileUpload.js";

const router = express.Router();

router.get('/berita', verifyUser, getBerita);
router.get('/berita/:id',verifyUser, getBeritaById);
router.post('/berita',verifyUser, uploadOption.single('foto'),createBerita);
router.delete('/berita/:id',verifyUser, deleteBerita);
router.patch('/berita/:id',verifyUser, uploadOption.single('foto'),updateBerita);

export default router;