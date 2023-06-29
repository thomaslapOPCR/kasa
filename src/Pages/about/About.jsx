import React from "react";
import style from "./About.module.css"
import Banner from "../../components/Banner/Banner.jsx";
import Image from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import data from "../../data/aboutMessage.json";

function About() {
  document.title = "a propos";

  return (
    <div className={style.Container}>
      <Banner imageSrc={Image}/>
      <section className={style.DropdownContainer}>
        {   data.map(({title,message},index) => (
          <Dropdown
            key={index}
            title={title}
            message={message}
          />
        ))
        }
      </section>
    </div>
  )
}


export default About
