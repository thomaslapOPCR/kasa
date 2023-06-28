import React from "react";

import styles from "./Footer.module.css";

import Logo from "../../assets/logo/LOGO_BLACK.png"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={Logo} alt="logo"/>
      <p className={styles.footerText}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;