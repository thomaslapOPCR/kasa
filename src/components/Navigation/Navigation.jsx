import React from "react";
import {NavLink} from "react-router-dom"
import styles from "./Nav.module.scss";
import Logo from "../../assets/logo/LOGO.png"


function Header() {


  return (
    <header className={styles.Header}>
      <img className={styles.Logo} src={Logo} alt="logo" />
      <nav className={styles.Nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.Link
          }
          to="/">Accueil</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.Link
          }
          to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header