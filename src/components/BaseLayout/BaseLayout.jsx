import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx"
const BaseLayout = () => {
  return (
    <div>
      <header>
        <Navigation/>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default BaseLayout;