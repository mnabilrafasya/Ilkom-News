// src/pages/HomePage.jsx
import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "../components/ComponentUtama/Navbar";
import Footer from "../components/ComponentUtama/Footer";
import HotNewsCard from "../components/ComponentUtama/HotNewsCard"; // Import HotNewsCard component
import HeroSection from "../components/ComponentHomePage/HeroSection"; // Import HeroSection component
import TabSection from "../components/ComponentHomePage/TabSection"; // Import TabSection component
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function HomePage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.body}>

        <Navbar /> {/* Include Navbar component */}

        <HeroSection /> {/* Include HeroSection component */}

        <TabSection /> {/* Include TabSection component */}

        <HotNewsCard />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default HomePage;
