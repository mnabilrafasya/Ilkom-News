const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Menyajikan file statis dari folder uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Konfigurasi koneksi MySQL (sesuaikan user dan password jika perlu)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bemilkom_ilkomnews",
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
    cb(null, "uploads/"); // Pastikan folder "uploads" sudah ada
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
