import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Error.module.css";
import {useTitle} from "../../TitleContext.jsx";

function Error() {
  const setTitle = useTitle();

  useEffect(() => {
    setTitle("error");
  }, [location, setTitle]);


  return (
    <div className={styles.Error}>

      <h1 className={styles.Code}>404</h1>
      <p className={styles.Message}>{"Oups! La page que vous demandez n'existe pas."}</p>
      <NavLink className={styles.NavLink} to="/">Retourner sur la page d’accueil</NavLink>

    </div>
  );
}

export default Error
