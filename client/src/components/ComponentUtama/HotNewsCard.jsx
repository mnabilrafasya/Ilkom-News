// src/components/HotNewsCard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./components.module.css";
import { useNavigate } from "react-router-dom";

const HotNewsCard = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomNews = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${baseUrl}/api/v1/berita/random?limit=4`);
        setNews(res.data);
      } catch (err) {
        console.error("Gagal memuat berita random:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchRandomNews();
  }, []);

  if (loading) return <div className={styles.loader}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <section className={styles.hotNewsSection}>
      <h2 className={styles.sectionTitle}>Hot Topic News</h2>
      <div className={styles.hotNewsGrid}>
        {news.map((item) => (
          <div key={item.uuid} className={styles.hotNewsCard}>
            <img
              src={item.foto}
              alt={item.judul}
              className={styles.hotNewsImage}
            />
            <div className={styles.hotNewsContent}>
              <div className={styles.hotNewsDate}>
                {new Date(item.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <h3 className={styles.hotNewsTitle}>{item.judul}</h3>
              <p className={styles.hotNewsText}>
                {item.isi.replace(/<[^>]+>/g, "")}
              </p>
              <button
                onClick={() => navigate(`/info-akademik/all/${item.uuid}`)}
                className={styles.hotNewsButton}
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

export default HotNewsCard;
