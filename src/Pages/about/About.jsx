import React from "react";
import style from "./About.module.css"
import Banner from "../../components/Banner/Banner.jsx";
import Image from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

function About() {


  return (
    <div className={style.Container}>
      <Banner imageSrc={Image}/>

      <Dropdown
        title="test 2"
        value="
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis doloremque enim et facilis illo laudantium neque quis similique. Animi at deserunt doloribus error, illo inventore ipsam, nam nostrum optio quaerat qui sint velit voluptas. Ab aliquam aliquid aperiam consequatur cupiditate deleniti dolorum ducimus ea eligendi eos fugiat, iste, itaque libero maxime mollitia nemo nesciunt nisi odio provident quas quia rem repellat soluta totam ullam veritatis voluptates? Animi architecto dicta dolorum, eaque, earum error eum expedita ipsum labore odit, officiis possimus quae repellat sunt tempore tenetur ut. Ab commodi deserunt distinctio, excepturi incidunt, ipsa minima, obcaecati pariatur provident repellat sequi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis doloremque enim et facilis illo laudantium neque quis similique. Animi at deserunt doloribus error, illo inventore ipsam, nam nostrum optio quaerat qui sint velit voluptas. Ab aliquam aliquid aperiam consequatur cupiditate deleniti dolorum ducimus ea eligendi eos fugiat, iste, itaque libero maxime mollitia nemo nesciunt nisi odio provident quas quia rem repellat soluta totam ullam veritatis voluptates? Animi architecto dicta dolorum, eaque, earum error eum expedita ipsum labore odit, officiis possimus quae repellat sunt tempore tenetur ut. Ab commodi deserunt distinctio, excepturi incidunt, ipsa minima, obcaecati pariatur provident repellat sequi.
        "
      />
    </div>
  )
}


export default About
