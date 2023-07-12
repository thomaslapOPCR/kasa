import React, { useState }  from "react";
import { ReactComponent as ChevronRight } from "./chevron-right.svg";
import styles from "./Carousel.module.css";
import PropTypes from "prop-types";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const shouldDisplayChevrons = data.length > 1;

  return (
    <div className={styles.carousel}>
      {shouldDisplayChevrons && (
        <ChevronRight
          className={`${styles.chevron} ${styles.left}`}
          onClick={prevSlide}
        />
      )}
      <img
        src={data[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className={styles.slide}
      />
      {shouldDisplayChevrons && (
        <ChevronRight
          className={`${styles.chevron} ${styles.right}`}
          onClick={nextSlide}
        />
      )}
      {shouldDisplayChevrons && (
        <div className={styles.counter}>
          {currentSlide + 1}/{data.length}
        </div>
      )}    
    </div>
  );
};


Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Carousel;