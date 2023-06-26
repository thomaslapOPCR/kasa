import React from "react";
import {NavLink, useMatch} from "react-router-dom"
import styles from "./Nav.module.css";
import Logo from "../../assets/logo/LOGO.png"


function Header() {
  const isActive = (path) => {
    const match = useMatch(path);
    return !!match;
  };

  return (
    <header className={styles.Header}>
      <img className={styles.Logo} src={Logo} alt="logo" />
      <nav className={styles.Nav}>
        <NavLink
          className={`${styles.Link} ${isActive("/") ? styles.active : ""}`}
          to="/">Accueil</NavLink>
        <NavLink
          className={`${styles.Link} ${isActive("/about") ? styles.active : ""}`}
          to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header