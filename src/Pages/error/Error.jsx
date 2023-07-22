import React from "react";
import {Link} from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
  document.title = "Erreur";

  return (
    <div className={styles.Error}>

      <h1 className={styles.Code}>404</h1>
      <p className={styles.Message}>{"Oups! La page que vous demandez n'existe pas."}</p>
      <Link className={styles.NavLink} to="/">Retourner sur la page d’accueil</Link>

    </div>
  );
}

export default Error
