import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/ComponentUtama/Navbar";
import Footer from "../../components/ComponentUtama/Footer";
import styles from "./Admin.module.css";

function Admin() {
  const [acara, setAcara] = useState([]);
  const [formData, setFormData] = useState({
    tanggal: "",
    isi: "",
    judul: "",
    image: null,
  });

  // Ambil data acara saat komponen di-render
  useEffect(() => {
    axios
      .get("/api/acara")
      .then((response) => setAcara(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("tanggal", formData.tanggal);
    data.append("isi", formData.isi);
    data.append("judul", formData.judul);
    if (formData.image) {
      data.append("image", formData.image);
    }

    axios
      .post("/api/acara", data)
      .then((response) => {
        setAcara((prev) => [...prev, response.data]);
        setFormData({ tanggal: "", isi: "", judul: "", image: null });
      })
      .catch((error) => console.error("Error adding event:", error));
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <h1 className={styles.title}>Informasi Acara</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        encType="multipart/form-data"
      >
        <div className={styles.formGroup}>
          <label className={styles.label}>Tanggal:</label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Judul:</label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Isi:</label>
          <textarea
            name="isi"
            value={formData.isi}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Tambah Acara
        </button>
      </form>

      <h2 className={styles.subtitle}>Daftar Acara</h2>
      <ul className={styles.eventList}>
        {acara.map((item) => (
          <li key={item.id} className={styles.eventItem}>
            <div className={styles.eventDetails}>
              <h3 className={styles.eventTitle}>{item.judul}</h3>
              <span className={styles.eventDate}>
                {new Date(item.tanggal).toLocaleDateString()}
              </span>
              <p className={styles.eventText}>{item.isi}</p>
            </div>
            {item.image && (
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.judul}
                className={styles.eventImage}
              />
            )}
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default Admin;
