require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Konfigurasi koneksi MySQL via .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Koneksi ke database gagal:", err);
  } else {
    console.log("Terhubung ke database MySQL");
  }
});

// Konfigurasi penyimpanan file dengan multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Endpoint GET: Mengambil semua data acara
app.get("/api/acara", (req, res) => {
  const sql = "SELECT * FROM acara";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Endpoint POST: Menambahkan data acara baru (dengan file upload)
app.post("/api/acara", upload.single("image"), (req, res) => {
  const { tanggal, isi, judul } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  const sql =
    "INSERT INTO acara (tanggal, isi, image, judul) VALUES (?, ?, ?, ?)";
  db.query(sql, [tanggal, isi, image, judul], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, tanggal, isi, image, judul });
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
