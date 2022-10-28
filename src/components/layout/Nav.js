import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useLocation } from 'react-router-dom';

const Nav = () => {

  let { pathname } = useLocation();
  return (
    <nav className={styles.navigation}>
      <li>
        <Link to="/" className={pathname === "/" ? `${styles.activeBold}` : ""}>
          Início
        </Link>
      </li>
      <li>
        <Link to="/series" className={pathname === "/series" ? `${styles.activeBold}` : ""}>
          Séries
        </Link>
      </li>
      <li>
        <Link to="/filmes" className={pathname === "/filmes" ? `${styles.activeBold}` : ""}>
          Filmes
        </Link>
      </li>
      <li>
        <Link to="/bombando" className={pathname === "/bombando" ? `${styles.activeBold}` : ""}>
          Bombando
        </Link>
      </li>
      <li>
        <Link to="/minhalista" className={pathname === "/minhalista" ? `${styles.activeBold}` : ""}>
          Minha lista
        </Link>
      </li>
    </nav>
  );
};

export default Nav;