// src/components/Navbar.js
import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./components.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarLogo}>
          <img
            src="/logoBEM.png"
            alt="Logo Artha Darma"
            className={styles.logoImage}
          />
          <div className={styles.navbarText}>
            <span className={styles.decorativeBold}>A</span>
            <span className={styles.regular}>RTHA</span>{" "}
            <span className={styles.regular}>DARM</span>
            <span className={styles.decorativeBold}>A</span>
            <br />
            BEM KM FASILKOM UNSRI
          </div>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <ul
          className={
            isOpen ? `${styles.navbarMenu} ${styles.open}` : styles.navbarMenu
          }
        >
          <li>
            <a href="/" className={styles.navbarLink}>
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.bemilkomunsri.org/about"
              className={styles.navbarLink}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.bemilkomunsri.org/profile"
              className={styles.navbarLink}
            >
              Profile
            </a>
          </li>
          <li>
            <a href="#" className={styles.navbarLink}>
              BEM Apps
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
