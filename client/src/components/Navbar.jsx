// src/components/Navbar.js
import React from "react";
import styles from "../pages/HomePage.module.css"; // Import CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src="logoBEM.png" alt="Logo Artha Darma" className={styles.logoImage} />
        <div className={styles.navbarText}>
          <span className={styles.decorativeBold}>A</span>
          <span className={styles.regular}>RTHA</span>{" "}
          <span className={styles.regular}>DARM</span>
          <span className={styles.decorativeBold}>A</span>
          <br />
          BEM KM FASILKOM UNSRI
        </div>
      </div>
      <ul className={styles.navbarMenu}>
        <li>
          <a href="/" className={styles.navbarLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.navbarLink}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" className={styles.navbarLink}>
            Profile
          </a>
        </li>
        <li>
          <a href="#" className={styles.navbarLink}>
            BEM Apps
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
