import React from "react";
import styles from "../../pages//HomePage/HomePage.module.css"; // Import CSS module for styling
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const HeroSection = () => {
  // CHANGED: tambah fungsi scrollToTab untuk scroll ke TabSection
  const scrollToTab = () => {
    const el = document.getElementById('tabSection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroText}>
        <div className={styles.heroLabel}>
          <span className={styles.heroLabelText}>ILKOM NEWS</span>
          <span className={styles.heroLabelLine}></span>
        </div>
        <h1 className={styles.heroTitle}>
          One platform to
          <span className={styles.highlight}> give you information</span> for
          boost your activities and achievement
        </h1>
        <p className={styles.heroSubtitle}>
          Ilkom news adalah tempat untuk mencari berbagai informasi terkait
          fakultas, informasi beasiswa, info lomba, dan berbagai informasi
          menarik lainnya. Mereka ketinggalan, kamu jangan.
        </p>
        <button onClick={scrollToTab} className={styles.heroButton}>
          Read More
        </button>
      </div>

      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageWrapper}>
          <img
            src="/universitas-sriwijaya.jpg"
            alt="Universitas"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroImageDecor}></div>
      </div>
    </header>
  );
};
export default HeroSection;
