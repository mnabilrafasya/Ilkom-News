// src/components/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown  } from "react-icons/fi";
import styles from "./components.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);

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
            <span className={styles.decorativeBold}>I</span>
            <span className={styles.regular}>LKOM</span>{" "}
            <span className={styles.regular}>NEW</span>
            <span className={styles.decorativeBold}>S</span>
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
          <li className={styles.dropdownContainer} ref={dropdownRef}>
            <a href="#" className={styles.navbarLink} onClick={toggleDropdown}>
              BEM Apps <FiChevronDown className={styles.dropdownIcon} />
            </a>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a
                    href="https://gaspol.bemilkomunsri.org"
                    className={styles.dropdownLink}
                  >
                    Gaspol
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bemilkomunsri.org/majalah"
                    className={styles.dropdownLink}
                  >
                    E-magazine
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
