// src/pages/HomePage.jsx
import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.body}>
        <Navbar /> {/* Include Navbar component */}
        <header className={styles.heroSection}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>
              <span className={styles.heroLabelText}>ILKOM NEWS</span>
              <span className={styles.heroLabelLine}></span>
            </div>
            <h1 className={styles.heroTitle}>
              One platform to
              <span className={styles.highlight}>
                {" "}
                give you information
              </span>{" "}
              for boost your activities and achievement
            </h1>
            <p className={styles.heroSubtitle}>
              Ilkom news adalah tempat untuk mencari berbagai informasi terkait
              fakultas, informasi beasiswa, info lomba, dan berbagai informasi
              menarik lainnya. Mereka ketinggalan, kamu jangan.
            </p>
            <button className={styles.heroButton}>Read More</button>
          </div>

          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageWrapper}>
              <img
                src="https://picsum.photos/400/400?random=1"
                alt="Universitas"
                className={styles.heroImage}
              />
            </div>
            <div className={styles.heroImageDecor}></div>
          </div>
        </header>
        <section className={styles.tabSection}>
          <h2 className={styles.sectionTitle}>What You Need</h2>
          <div className={styles.tabMenu}>
            <button className={styles.tabButton}>Seputar Ilkom</button>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.tabButton}
            >
              Info Akademik
            </button>
            <button className={styles.tabButton}>Info Non-Akademik</button>
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
                  Berdasarkan Prestasi (SNBP) Tahun 2025 Universitas
                  Sriwijaya...
                </p>
                <button className={styles.cardButton}>Read More</button>
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
                  Berdasarkan Prestasi (SNBP) Tahun 2025 Universitas
                  Sriwijaya...
                </p>
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hotNewsSection}>
          <h2 className={styles.sectionTitle}>Hot Topic News</h2>
          <div className={styles.hotNewsGrid}>
            <div className={styles.hotNewsCard}>
              <img
                src="https://picsum.photos/300/200?random=4"
                alt="Topic 1"
                className={styles.hotNewsImage}
              />
              <div className={styles.hotNewsContent}>
                <div className={styles.hotNewsDate}>1 - 15 September 2024</div>
                <h3 className={styles.hotNewsTitle}>TECHPO 2024</h3>
                <p className={styles.hotNewsText}>
                  Techpooria menghadirkan serangkaian acara IT tahunan dengan
                  fokus kolaborasi yang menarik...
                </p>
                <button className={styles.hotNewsButton}>Read More</button>
              </div>
            </div>

            <div className={styles.hotNewsCard}>
              <img
                src="https://picsum.photos/300/200?random=5"
                alt="Topic 2"
                className={styles.hotNewsImage}
              />
              <div className={styles.hotNewsContent}>
                <div className={styles.hotNewsDate}>1 - 15 September 2024</div>
                <h3 className={styles.hotNewsTitle}>TECHPO 2024</h3>
                <p className={styles.hotNewsText}>
                  Techpooria menghadirkan serangkaian acara IT tahunan dengan
                  fokus kolaborasi yang menarik...
                </p>
                <button className={styles.hotNewsButton}>Read More</button>
              </div>
            </div>

            <div className={styles.hotNewsCard}>
              <img
                src="https://picsum.photos/300/200?random=6"
                alt="Topic 3"
                className={styles.hotNewsImage}
              />
              <div className={styles.hotNewsContent}>
                <div className={styles.hotNewsDate}>1 - 15 September 2024</div>
                <h3 className={styles.hotNewsTitle}>TECHPO 2024</h3>
                <p className={styles.hotNewsText}>
                  Techpooria menghadirkan serangkaian acara IT tahunan dengan
                  fokus kolaborasi yang menarik...
                </p>
                <button className={styles.hotNewsButton}>Read More</button>
              </div>
            </div>

            <div className={styles.hotNewsCard}>
              <img
                src="https://picsum.photos/300/200?random=7"
                alt="Topic 4"
                className={styles.hotNewsImage}
              />
              <div className={styles.hotNewsContent}>
                <div className={styles.hotNewsDate}>1 - 15 September 2024</div>
                <h3 className={styles.hotNewsTitle}>TECHPO 2024</h3>
                <p className={styles.hotNewsText}>
                  Techpooria menghadirkan serangkaian acara IT tahunan dengan
                  fokus kolaborasi yang menarik...
                </p>
                <button className={styles.hotNewsButton}>Read More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default HomePage;
