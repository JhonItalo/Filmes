import React, { useState, useEffect } from 'react';
import styles from './Banner.module.scss'
import { useLocation } from 'react-router-dom';
import InfoFilme from './InfoFilme';

function Banner({ filmebanner }) {
    const [filmeDestaque, setfilmeDestaque] = useState("")
    let { pathname } = useLocation();


    useEffect(() => {
        setfilmeDestaque(filmebanner);
    }, [filmebanner]);

    return (
        <section className={styles.banner}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaque.backdrop_path}")`,
            }} >

            <div className={styles.gradiente_banner}>

                <InfoFilme filmeDestaqueParams={filmeDestaque} />

                {pathname === "/series" &&
                    <div className={styles.conteudo_banner_series}>
                        <h3>Séries</h3>
                        <div className={styles.select}>
                            <p >Gêneros</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                }

                {pathname === "/filmes" &&
                    <div className={styles.conteudo_banner_Filmes}>
                        <h1>filmes</h1>
                    </div>
                }

                {pathname === "/bombando" &&
                    <div className={styles.conteudo_banner_Bombando}>
                        <h1>bombando</h1>
                    </div>
                }

                {pathname === "/minhalista" &&
                    <div className={styles.conteudo_banner_home}>
                        <h1>minhalista</h1>
                    </div>
                }

            </div>

        </ section>
    );
}

export default Banner;