import React from "react";
import { ReactComponent as Stars } from "./star-fill.svg";
import PropTypes from "prop-types";

const Popularity = ({ rating }) => {
  const filledStars = parseInt(rating)
  const starColor = filledStars >= 1 && filledStars <= 5 ? "#FF6060" : "#E3E3E3";

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Stars width="30" height="30" key={index} fill={index < filledStars ? starColor : "#E3E3E3"} />
      ))}
    </div>
  );
};

Popularity.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Popularity;