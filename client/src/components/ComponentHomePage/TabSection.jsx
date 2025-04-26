// TabSection.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../pages/HomePage/HomePage.module.css";

const categories = [
  { label: "Seputar Ilkom", slug: "seputar-ilkom" },
  { label: "Info Akademik", slug: "akademik" },
  { label: "Info Non-Akademik", slug: "non-akademik" },
];

const TabSection = ({ initialCategory }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? null);;
  const [beritas, setBeritas] = useState([]);

  useEffect(() => {
    setActiveCategory(initialCategory ?? null);
  }, [initialCategory]);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        let res;

        if (!activeCategory) {
          // random
          res = await axios.get(`${baseUrl}/api/v1/berita/random?limit=4`);
        } else {
          // per kategori
          res = await axios.get(
            `${baseUrl}/api/v1/berita/kategori/${activeCategory}`
          );
        }

        setBeritas(res.data);
      } catch (err) {
        console.error("Gagal memuat berita:", err);
      }
    };
    fetchBerita();
  }, [activeCategory]);

  return (
    <section id="tabSection" className={styles.tabSection}>
      <h2 className={styles.sectionTitle}>What You Need</h2>

      {/* Tab Buttons */}
      <div className={styles.tabMenu}>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`${styles.tabButton} ${
              activeCategory === cat.slug ? styles.active : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards Container */}
      <div className={styles.cardContainer}>
        {beritas.map((b) => (
          <div key={b.uuid} className={styles.card}>
            <img src={b.foto} alt={b.judul} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{b.judul}</h3>
              <div className={styles.cardDate}>
                {new Date(b.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <p className={styles.cardText}>{b.isi.replace(/<[^>]+>/g, "")}</p>
              <button
                onClick={() =>
                  navigate(`/info-akademik/${activeCategory}/${b.uuid}`)
                }
                className={styles.cardButton}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabSection;
