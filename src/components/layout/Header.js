import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import perfil from "../../assets/perfil.PNG"
import Nav from './Nav';

function Header() {

  const [activescrolly, setactivescrolly] = useState(false)

  useEffect(() => {
    const scrolly = () => {
      if (window.scrollY > 0) {
        setactivescrolly(true)
      }
      else {
        setactivescrolly(false)
      }

    }
    window.addEventListener('scroll', scrolly);
    return () => {
      window.removeEventListener('scroll', scrolly);
    }
  }, [])

  return (
    <header className={`${styles.header} ${activescrolly === true ? `${styles.activescrolly}` : ""} `}>
      <div className={styles.capsula_Logo_Navigation_Flex}>
        <Link to="/" className={styles.logo}> <p>Filmes</p></Link>
        <Nav />
      </div>
      <div className={styles.busca_e_icons}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-bell"></i>
        <div className={styles.user}>
          <img src={perfil} alt="perfil" style={{ width: "30px", heigh: "30px", borderRadius: "5px" }} />
          <i className="fa-solid fa-caret-down" style={{ fontSize: "15px" }}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;