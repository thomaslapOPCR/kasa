import React, { useState }  from "react";
import { ReactComponent as ChevronRight } from "./chevron-right.svg";
import styles from "./Carousel.module.css";

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

  return (
    <div className={styles.carousel}>
      <ChevronRight className={`${styles.chevron}  ${styles.left}` } onClick={prevSlide} />
      <img
        src={data[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className={styles.slide}
      />
      <ChevronRight className={`${styles.chevron} ${styles.right}` } onClick={nextSlide} />
    </div>
  );
};

export default Carousel;