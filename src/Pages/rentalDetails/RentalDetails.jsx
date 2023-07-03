import React from "react";
import logements from "../../data/logement.json";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import Host from "../../components/Host/Host.jsx";
import Popularity from "../../components/Popularity/Popularity.jsx";



function RentalDetails() {
  document.title = "Logements";
  let logementId = useParams();
  const logementData = logements.filter(logement=> logement.id === logementId.id)[0];

  return(
    <section>
      <section id="carousel">
        {
          <Carousel
            data={logementData.pictures}
          />
        }
      </section>

      <section id="info">
        <article>
          <h2>{logementData.title}</h2>
          <p>{logementData.location}</p>
          {
            logementData.tags.map((item , index)=>(
              <Tag key={index} data={item}/>
            ))
          }
        </article>
        <article>
          <Host data={logementData.host}/>
          <Popularity  data={logementData.rating}/>
        </article>
      </section>

      <section id="dropdownContainer">

      </section>
    </section>        
  )
}


export default RentalDetails
