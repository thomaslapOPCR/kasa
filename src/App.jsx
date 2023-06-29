import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import About from "./Pages/about/About.jsx";
import RentalDetails from "./Pages/rentalDetails/RentalDetails.jsx";
import Error from "./Pages/error/Error.jsx";
import BaseLayout from "./components/BaseLayout/BaseLayout.jsx";
// import { TitleProvider } from "./TitleContext.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rentalDetails" element={<RentalDetails />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;