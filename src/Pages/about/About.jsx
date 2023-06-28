import React from "react";
import style from "./About.module.css"
import Banner from "../../components/Banner/Banner.jsx";
import Image from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

function About() {


  return (
    <div className={style.Container}>
      <Banner imageSrc={Image}/>

      <Dropdown/>
    </div>
  )
}


export default About
