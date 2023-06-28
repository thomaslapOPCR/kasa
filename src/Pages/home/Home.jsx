import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import Image from "../../assets/images/IMG.png";
import style from "./Home.module.css";
import data from "../../data/logement.json"
import Card from "../../components/Card/Card.jsx";

function Home() {

  const Cards = data.map(({id,title,cover},index) => (
    <Card
      key={index}
      id={id}
      title={title}
      cover={cover}
    />
  ));

  return (
    <div className={style.global__container}>
      <Banner
        imageSrc={Image}
        title="Chez vous, partout et ailleurs"
      />
      <div className={style.Container}>
        {Cards}
      </div>
    </div>
  );
}


export default Home
