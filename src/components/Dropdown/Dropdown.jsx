import React, { useState } from "react";
import { ReactComponent as Chevron } from "./chevron-down.svg";
import style from "./Dropdown.module.css";

const Dropdown = ({ title = "test", value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className={style.DropdownBase}>
      <button className={style.DropdownHeader} onClick={handleToggle}>
        <h1 className={style.title}>{title}</h1>
        <Chevron className={isOpen ? style.rotate : ""} />
      </button>

      {isOpen && (
        <div className={style.wrapper}>
          {Array.isArray(value) ? (
            <ul>
              {value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{value}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Dropdown;