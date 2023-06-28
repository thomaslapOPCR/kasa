import React from "react";
import style from "./Tag.module.css";

const Tag = ({data}) => {
  return (
    <div className={style.TagContainer}>
      <p className={style.TagText}>{data}</p>
    </div>
  );
};

export default Tag;