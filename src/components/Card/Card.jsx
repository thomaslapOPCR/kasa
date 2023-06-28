import React from "react";
import style from "./card.module.css";
import {Link} from "react-router-dom";

const Card = ({id,title,cover}) => {

  return (
    <div className={style.content}>
      <Link  to={`/rentalDetail/${id}`}>
        <img className={style.content__image} src={cover} alt={title}/>
        <p className={style.content__Text}>{title}</p>
      </Link>
    </div>
  );
};

export default Card;