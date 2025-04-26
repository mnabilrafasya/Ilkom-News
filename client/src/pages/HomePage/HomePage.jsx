// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import styles from "./HomePage.module.css";
import Navbar from "../../components/ComponentUtama/Navbar";
import Footer from "../../components/ComponentUtama/Footer";
import HotNewsCard from "../../components/ComponentUtama/HotNewsCard"; // Import HotNewsCard component
import HeroSection from "../../components/ComponentHomePage/HeroSection"; // Import HeroSection component
import TabSection from "../../components/ComponentHomePage/TabSection"; // Import TabSection component
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useLocation } from 'react-router-dom';


function HomePage() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [initialCategory, setInitialCategory] = useState(null);
  
    useEffect(() => {
      const { category, scrollTo } = location.state || {};
    if (category) {
      setInitialCategory(category);
    }
    if (scrollTo === 'tabSection') {
      const el = document.getElementById('tabSection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // CHANGED: clear state so navbar/footer clicks won't retrigger
    if (category || scrollTo) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);
  
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.body}>

        <Navbar /> {/* Include Navbar component */}

        <HeroSection /> {/* Include HeroSection component */}

        <TabSection initialCategory={initialCategory} />

        <HotNewsCard />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default HomePage;
