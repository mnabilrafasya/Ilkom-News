// src/components/Navbar.js
import React from "react";
import styles from "./components.module.css";

const Navbar = () => {
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
        <ul className={styles.navbarMenu}>
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
