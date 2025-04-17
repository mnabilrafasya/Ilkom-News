// src/pages/InfoAkademik.jsx
import React from "react";
import styles from "./InfoAkademik.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function InfoAkademik() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className={styles.infoAkademikContainer}>
      <div className={styles.body}>
      <Navbar /> {/* Include Navbar component */}
      
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
      <div className={styles.content}>
        <div className={styles.contentOne}>
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
              tellus justo odio parturient mauris curabitur lorem in. Pulvinar
              sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum
              augue id cras purus. At eget euismod cursus non. Molestie
              dignissim sed volutpat feugiat vel enim eu turpis imperdiet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in. Pulvinar
              sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum
              augue id cras purus.
            </p>

            <h2>Timeline</h2>
            <ul>
              <li>
                Pendaftaran: 1 - 27 September 2024 &amp; Gelombang 2 (28
                September - 12 Oktober 2024)
              </li>
              <li>
                Deadline Pengumpulan Karya: 1 (27 September 2024) &amp;
                Gelombang 2 (12 Oktober 2024)
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
      {/* Hot Topic News */}
      <section className={styles.hotTopicSection}>
        <h2 className={styles.hotTopicTitle}>Hot Topic News</h2>
        <p className={styles.hotTopicSubtitle}>
          Topik terkini yang sedang hangat dibahas di Fakultas Ilmu Komputer
        </p>

        <div className={styles.hotTopicGrid}>
          {/* Card 1 */}
          <div className={styles.hotTopicCard}>
            <div className={styles.cardImageContainer}>
              <img
                src="https://picsum.photos/300/200?random=2"
                alt="Topic 1"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardDate}>1 - 15 September 2024</div>
              <h3 className={styles.cardTitle}>TECHPO 2024</h3>
              <p className={styles.cardDesc}>
                Techpooria menghadirkan serangkaian acara IT tahunan dengan
                fokus kolaborasi yang menarik...
              </p>
              <button className={styles.cardButton}>Read More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.hotTopicCard}>
            <div className={styles.cardImageContainer}>
              <img
                src="https://picsum.photos/300/200?random=3"
                alt="Topic 2"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardDate}>1 - 15 September 2024</div>
              <h3 className={styles.cardTitle}>TECHPO 2024</h3>
              <p className={styles.cardDesc}>
                Techpooria menghadirkan serangkaian acara IT tahunan dengan
                fokus kolaborasi yang menarik...
              </p>
              <button className={styles.cardButton}>Read More</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.hotTopicCard}>
            <div className={styles.cardImageContainer}>
              <img
                src="https://picsum.photos/300/200?random=4"
                alt="Topic 3"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardDate}>1 - 15 September 2024</div>
              <h3 className={styles.cardTitle}>TECHPO 2024</h3>
              <p className={styles.cardDesc}>
                Techpooria menghadirkan serangkaian acara IT tahunan dengan
                fokus kolaborasi yang menarik...
              </p>
              <button className={styles.cardButton}>Read More</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.hotTopicCard}>
            <div className={styles.cardImageContainer}>
              <img
                src="https://picsum.photos/300/200?random=5"
                alt="Topic 4"
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardDate}>1 - 15 September 2024</div>
              <h3 className={styles.cardTitle}>TECHPO 2024</h3>
              <p className={styles.cardDesc}>
                Techpooria menghadirkan serangkaian acara IT tahunan dengan
                fokus kolaborasi yang menarik...
              </p>
              <button className={styles.cardButton}>Read More</button>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default InfoAkademik;
