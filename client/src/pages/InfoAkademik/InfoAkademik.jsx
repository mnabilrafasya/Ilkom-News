// src/pages/InfoAkademik.jsx
import React from "react";
import styles from "./InfoAkademik.module.css";
import Navbar from "../../components/ComponentUtama/Navbar";
import Footer from "../../components/ComponentUtama/Footer";
import HotNewsCard from "../../components/ComponentUtama/HotNewsCard"; // Import HotNewsCard component
import Content from "../../components/ComponentInfoAkademik/content"; // Import Content component

function InfoAkademik() {
  return (
    <div className={styles.infoAkademikContainer}>
      <div className={styles.body}>
        <Navbar /> {/* Include Navbar component */}
        
        <Content /> {/* Include Content component */}

        {/* Hot Topic News */}
        <HotNewsCard />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default InfoAkademik;
