import React from "react";
import style from "./Tag.module.css";
import PropTypes from "prop-types";

const Tag = ({data}) => {
  return (
    <div className={style.TagContainer}>
      <p className={style.TagText}>{data}</p>
    </div>
  );
};

Tag.propTypes = {
  data: PropTypes.string.isRequired,
};


export default Tag;