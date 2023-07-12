import React from "react";
import styles from "./Banner.module.css";
import PropTypes from "prop-types";

const Banner = ({ imageSrc, title }) => {
  return (
    <div className={styles.Container}>
      <img className={styles.Image} src={imageSrc} alt="banner"/>
      {title && <h1 className={styles.Text}>{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;