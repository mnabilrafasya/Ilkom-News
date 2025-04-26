import Berita from "../models/BeritaModel.js";
import User from "../models/UserModel.js";
import Category from "../models/CategoryModel.js";
import { literal } from "sequelize";

// Mengambil semua berita
export const getBerita = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Berita.findAll({
        attributes: ["uuid", "judul", "tanggal", "isi", "foto"],
        include: [
          { model: User, attributes: ["name", "email"] },
          { model: Category, attributes: ["slug", "nama"] },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Mengambil 1 berita berdasarkan UUID
export const getBeritaById = async (req, res) => {
  try {
    const berita = await Berita.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!berita) return res.status(404).json({ msg: "Data tidak ditemukan" });

    let response;
    if (req.role === "admin") {
      response = await Berita.findOne({
        attributes: ["uuid", "judul", "tanggal", "isi", "foto"],
        where: { id: berita.id },
        include: [
          { model: User, attributes: ["name", "email"] },
          { model: Category, attributes: ["slug", "nama"] },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getRandomBerita = async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 4;
  try {
    // 'literal' diambil dari import Sequelize
    const randomBerita = await Berita.findAll({
      order: literal("RAND()"), // perintah SQL RAND()
      limit,
    });
    return res.status(200).json(randomBerita);
  } catch (err) {
    console.error("Error fetching random berita:", err);
    return res.status(500).json({ message: "Gagal memuat berita random." });
  }
};

// Ambil berita per kategori (slug)
export const getBeritaByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const cat = await Category.findOne({ where: { slug } });
    if (!cat) return res.status(404).json({ msg: "Kategori tidak ditemukan" });

    const data = await Berita.findAll({
      where: { categoryId: cat.id },
      attributes: ["uuid", "judul", "tanggal", "isi", "foto"],
      include: [
        { model: User, attributes: ["name", "email"] },
        { model: Category, attributes: ["slug", "nama"] },
      ],
      order: [["tanggal", "DESC"]],
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Tambah berita baru
export const createBerita = async (req, res) => {
  const { judul, tanggal, isi, categoryId } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ msg: "Tidak ada file image yang diinput" });
  }

  if (!categoryId) {
    return res.status(400).json({ msg: "Kategori harus dipilih" });
  }

  const fileName = file.filename;
  const pathFile = `${req.protocol}://${req.get(
    "host"
  )}/public/uploads/${fileName}`;

  try {
    await Berita.create({
      judul,
      tanggal,
      isi,
      foto: pathFile,
      userId: req.userId,
      categoryId,
    });
    res.status(201).json({ msg: "Berita created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update data berita
export const updateBerita = async (req, res) => {
  try {
    const berita = await Berita.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!berita) return res.status(404).json({ msg: "Data tidak ditemukan" });

    const { judul, tanggal, isi, foto, categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({ msg: "Kategori harus dipilih" });
    }

    if (req.role === "admin") {
      await Berita.update(
        { judul, tanggal, isi, foto, categoryId },
        { where: { id: berita.id } }
      );
    }
    res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Hapus berita
export const deleteBerita = async (req, res) => {
  try {
    const berita = await Berita.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!berita) return res.status(404).json({ msg: "Data tidak ditemukan" });

    if (req.role === "admin") {
      await Berita.destroy({ where: { id: berita.id } });
    }
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
