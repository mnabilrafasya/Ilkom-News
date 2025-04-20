import React from "react";
import styles from "../../pages/HomePage.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const TabSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <section className={styles.tabSection}>
      <h2 className={styles.sectionTitle}>What You Need</h2>
      <div className={styles.tabMenu}>
        <button
          onClick={() => navigate("/info-akademik")}
          className={styles.tabButton}
        >
          Seputar Ilkom
        </button>
        <button
          onClick={() => navigate("/info-akademik")}
          className={styles.tabButton}
        >
          Info Akademik
        </button>
        <button
          onClick={() => navigate("/info-akademik")}
          className={styles.tabButton}
        >
          Info Non-Akademik
        </button>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="https://picsum.photos/300/200?random=2"
            alt="Berita 1"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <div className={styles.cardDate}>18 Maret 2025</div>
            <h3 className={styles.cardTitle}>
              Unsri Gelar Konferensi Pers terkait Hasil SNBP
            </h3>
            <p className={styles.cardText}>
              Unsri Gelar Konferensi Pers terkait hasil Seleksi Nasional
              Berdasarkan Prestasi (SNBP) Tahun 2025 Universitas Sriwijaya...
            </p>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.cardButton}
            >
              Read More
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://picsum.photos/300/200?random=3"
            alt="Berita 2"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <div className={styles.cardDate}>18 Maret 2025</div>
            <h3 className={styles.cardTitle}>
              Unsri Gelar Konferensi Pers terkait Hasil SNBP
            </h3>
            <p className={styles.cardText}>
              Unsri Gelar Konferensi Pers terkait hasil Seleksi Nasional
              Berdasarkan Prestasi (SNBP) Tahun 2025 Universitas Sriwijaya...
            </p>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.cardButton}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TabSection;
