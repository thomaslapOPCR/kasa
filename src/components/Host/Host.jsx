import React from "react";
import style from "./Host.module.css";

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

export default Host;