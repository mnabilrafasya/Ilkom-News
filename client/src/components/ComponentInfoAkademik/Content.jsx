import React from "react";
import styles from "../../pages/InfoAkademik.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentOne}>
        <header className={styles.postHeader}>
          <h1 className={styles.postTitle}>Techpo 2024</h1>
          <div className={styles.postMeta}>
            <span className={styles.postAuthor}>Determined-poitras</span>
            <span className={styles.separator}>|</span>
            <span className={styles.postDate}>Jan 24, 2023</span>
            <span className={styles.separator}>|</span>
            <span className={styles.postComments}>20 Comments</span>
          </div>
        </header>
        {/* Gambar Utama */}
        <div className={styles.featuredImageContainer}>
          <img
            src="https://picsum.photos/800/400?random=1"
            alt="Techpo 2024"
            className={styles.featuredImage}
          />
        </div>

        {/* Konten / Deskripsi */}
        <div className={styles.postContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
            ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id
            cras purus. At eget euismod cursus non. Molestie dignissim sed
            volutpat feugiat vel enim eu turpis imperdiet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
            ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id
            cras purus.
          </p>

          <h2>Timeline</h2>
          <ul>
            <li>
              Pendaftaran: 1 - 27 September 2024 &amp; Gelombang 2 (28 September
              - 12 Oktober 2024)
            </li>
            <li>
              Deadline Pengumpulan Karya: 1 (27 September 2024) &amp; Gelombang
              2 (12 Oktober 2024)
            </li>
            <li>Pengumuman Finalis: 18 Oktober 2024</li>
            <li>Technical Meeting Finalis: 19 Oktober 2024</li>
            <li>Pengumuman Pemenang: 24 Oktober 2024</li>
          </ul>

          <h2>Registration</h2>
          <p>
            Segera daftarkan dirimu untuk perlombaan Techpo melalui{" "}
            <a href="#" className={styles.linkRegistration}>
              link pendaftaran
            </a>{" "}
            dan jangan lupa akses{" "}
            <a href="#" className={styles.linkGuidebook}>
              guidebook lomba
            </a>{" "}
            untuk informasi lengkapnya!
          </p>
        </div>

        {/* Share Icons */}
        <div className={styles.postShare}>
          <span>Share:</span>
          <a href="#" className={styles.shareIcon}>
            🔗
          </a>
          <a href="#" className={styles.shareIcon}>
            🐦
          </a>
          <a href="#" className={styles.shareIcon}>
            📘
          </a>
          <a href="#" className={styles.shareIcon}>
            📸
          </a>
        </div>
      </div>
      <div className={styles.contentTwo}>
        <h2>What You Need</h2>
        <div className={styles.buttonText}>
          <button>Seputar Ilkom</button>
          <button>Info Akademik</button>
          <button>Info Non-Akademik</button>
        </div>
      </div>
    </div>
  );
};
export default Content;
