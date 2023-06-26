import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import About from "./Pages/about/About.jsx";
import RentalDetails from "./Pages/rentalDetails/RentalDetails.jsx";
import Error from "./Pages/error/Error.jsx";
import BaseLayout from "./components/BaseLayout/BaseLayout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/RentalDetails" element={<RentalDetails/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;