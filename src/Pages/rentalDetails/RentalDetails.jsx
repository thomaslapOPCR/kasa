import React from "react";
import logements from "../../data/logement.json";
import { useParams  } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import Host from "../../components/Host/Host.jsx";
import Popularity from "../../components/Popularity/Popularity.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import style from "./RentalDetail.module.css";


function RentalDetails() {


  let logementId = useParams();
  const logementData = logements.filter(logement=> logement.id === logementId.id)[0];
  
  if (logementData === undefined) {
    location.href = "/error"
  }

  document.title = logementData.title;
  return(
    <section>
      <section id="carousel">
        {
          <Carousel
            data={logementData.pictures}
          />
        }
      </section>

      <section className={style.info}>
        <article>
          <h2>{logementData.title}</h2>
          <p>{logementData.location}</p>
          <div className={style.tagContainer}>
            {
              logementData.tags.map((item , index)=>(
                <Tag key={index} data={item}/>
              ))
            }
          </div>
        </article>
        <article>
          <Host data={logementData.host}/>
          <Popularity rating={logementData.rating}/>
        </article>
      </section>

      <section className={style.dropdownContainer}>
        <Dropdown
          title={"Description"}
          message={logementData.description}
        />
        <Dropdown
          title={"Equipments"}
          message={logementData.equipments}
        />
      </section>
    </section>        
  )
}


export default RentalDetails
