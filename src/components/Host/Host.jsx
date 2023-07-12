import React from "react";
import style from "./Host.module.css";
import PropTypes from "prop-types";

const Host = (data) => {
  return (
    <div className={style.hostContainer}>
      <div className={style.name}>
        <p>
          {data.data.name.split(" ")[0]} <br/> {data.data.name.split(" ")[1]}</p>
      </div>
      <img className={style.picture} src={data.data.picture} alt={data.data.name}/>
    </div>
  );
};

Host.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Host;