import React from "react";
import { Link } from "react-router-dom"
import styles from "../style/Modules/Nav.module.css";
import Logo from "../assets/logo/LOGO.png"


function Header() {
  return (
    <header className={styles.Header}>
      <img className={styles.Logo} src={Logo} alt="logo"/>
      <nav className={styles.Nav}>
        <Link className={styles.Link} to="/" >accueil</Link>
        <Link className={styles.Link} to="/about">a propos</Link>
      </nav>
    </header>
  );
}

export default Header