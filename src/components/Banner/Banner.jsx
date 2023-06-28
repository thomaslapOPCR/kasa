import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ imageSrc, title }) => {
  return (
    <div className={styles.Container}>
      <img className={styles.Image} src={imageSrc} alt="banner"/>
      {title && <h1 className={styles.Text}>{title}</h1>}
    </div>
  );
};

export default Banner;