// src/components/ComponentInfoAkademik/Content.jsx
import React, { useState, useEffect } from "react";
import styles from "../../pages//InfoAkademik/InfoAkademik.module.css"; // Import CSS module for styling
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

const Content = () => {
  const { category, uuid } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${baseUrl}/api/v1/berita/${uuid}`);
        setPost(res.data);
      } catch (err) {
        console.error("Gagal memuat detail berita:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [uuid]);

  if (loading) return <div className={styles.loader}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!post) return <div className={styles.error}>Berita tidak ditemukan.</div>;

  const authorName = post.User?.name || "Penulis tidak diketahui";
  const postDate = new Date(post.tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.content}>
      <div className={styles.contentOne}>
        <header className={styles.postHeader}>
          <h1 className={styles.postTitle}>{post.judul}</h1>
          <div className={styles.postMeta}>
            <span className={styles.postAuthor}>{authorName}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.postDate}>{postDate}</span>
          </div>
        </header>
        <div className={styles.featuredImageContainer}>
          <img
            src={post.foto}
            alt={post.judul}
            className={styles.featuredImage}
          />
        </div>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.isi }}
        />
      </div>
      <div className={styles.contentTwo}>
        <h2>What You Need</h2>
        <div className={styles.buttonText}>
          {/* CHANGED: Three Link buttons returning to HomePage with state */}
          <Link
            to="/"
            state={{ category: 'seputar-ilkom', scrollTo: 'tabSection' }}
            className={styles.categoryButton}
          >
            Seputar Ilkom
          </Link>
          <Link
            to="/"
            state={{ category: 'akademik', scrollTo: 'tabSection' }}
            className={styles.categoryButton}
          >
            Info Akademik
          </Link>
          <Link
            to="/"
            state={{ category: 'non-akademik', scrollTo: 'tabSection' }}
            className={styles.categoryButton}
          >
            Info Non-Akademik
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
