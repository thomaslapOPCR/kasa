import React from "react";
import logements from "../../data/logement.json";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
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

      </section>

      <section id="dropdownContainer">

      </section>
    </section>        
  )
}


export default RentalDetails
