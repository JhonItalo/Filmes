import React, { useRef, useState } from 'react';
import styles from "./Slide.module.scss"

const Slide = ({ item }) => {
    const carroselscroll = useRef();

    const [activeBtn, setactiveBtn] = useState(false);

    const visibleBtn = () => {
        setactiveBtn(true)
    }
    const hiddenBtn = () => {
        setactiveBtn(false)
    }

    const btn_direito = () => {
        carroselscroll.current.scrollLeft += (carroselscroll.current.offsetWidth - 68);
    }
    const btn_esquerdo = () => {
        carroselscroll.current.scrollLeft -= (carroselscroll.current.offsetWidth + 68);
    }

    return (
        <div className={styles.carrosel} ref={carroselscroll} onMouseOver={visibleBtn} onMouseOut={hiddenBtn}>
            <div onClick={btn_direito} className={`${styles.button_direita} ${activeBtn === true ? `${styles.activeBtn}` : ""} }`}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div onClick={btn_esquerdo} className={`${styles.button_esquerda} ${activeBtn === true ? `${styles.activeBtn}` : ""} }`} >
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            {item.lista.results.map((filme) => (
                <div key={filme.id} className={styles.carrosel_img} style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w300/${filme.backdrop_path}")`,
                }} >
                </div>
            ))}
        </div>
    );
}

export default Slide;