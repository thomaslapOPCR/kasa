import React from "react";
import style from "./card.module.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({id,title,cover}) => {

  return (
    <div className={style.content}>
      <Link  to={`/rentalDetails/${id}`}>
        <img className={style.content__image} src={cover} alt={title}/>
        <p className={style.content__Text}>{title}</p>
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;