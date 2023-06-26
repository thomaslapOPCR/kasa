import React, {useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx"
import {getPageName, useTitle} from "../../TitleContext.jsx";


const BaseLayout = () => {
  const location = useLocation();
  const setTitle = useTitle();

  useEffect(() => {
    const pageName = getPageName(location.pathname);
    setTitle(pageName);
  }, [location, setTitle]);
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default BaseLayout;