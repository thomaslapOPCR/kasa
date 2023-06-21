import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./views/home/Home.jsx"
import About from "./views/about/About.jsx"
import Error from "./views/error/Error.jsx"
import RentalDetails from "./views/rentalDetails/RentalDetails.jsx"
import Navigation from "./components/Navigation.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home active />} />
        <Route path="/about" element={<About active />} />
        <Route path="/RentalDetails" element={<RentalDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)