import React, { useState } from "react";
import { ReactComponent as Chevron } from "./chevron-down.svg";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.isOpen : ""}`}>
      <button onClick={handleToggle} className={styles.dropbtn}>
        <h1>{title}</h1>
        <Chevron className={isOpen ? styles.rotate : styles.noRotate} />
      </button>
      <div  className={`${styles.dropdowncontent} ${isOpen ? styles.isOpen : ""}`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Dropdown;