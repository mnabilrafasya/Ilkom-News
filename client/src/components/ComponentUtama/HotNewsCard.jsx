import React from "react";
import styles from "./components.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const HotNewsCard = () => {
  const navigate = useNavigate(); // Create a navigate function

  return (
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
              Techpooria menghadirkan serangkaian acara IT tahunan dengan fokus
              kolaborasi yang menarik...
            </p>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.hotNewsButton}
            >
              Read More
            </button>
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
              Techpooria menghadirkan serangkaian acara IT tahunan dengan fokus
              kolaborasi yang menarik...
            </p>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.hotNewsButton}
            >
              Read More
            </button>
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
              Techpooria menghadirkan serangkaian acara IT tahunan dengan fokus
              kolaborasi yang menarik...
            </p>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.hotNewsButton}
            >
              Read More
            </button>
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
              Techpooria menghadirkan serangkaian acara IT tahunan dengan fokus
              kolaborasi yang menarik...
            </p>
            <button
              onClick={() => navigate("/info-akademik")}
              className={styles.hotNewsButton}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HotNewsCard;
