import React, { useState } from "react";
import { ReactComponent as Chevron } from "./chevron-down.svg";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={handleToggle} className={styles.dropbtn}>
        <h1>{title}</h1>
        <Chevron className={isOpen ? styles.rotate : styles.noRotate} />
      </button>
      <div  className={`${styles.dropdowncontent} ${isOpen ? styles.isOpen : ""}`}>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Dropdown;