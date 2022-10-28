import styles from "./InfoFilme.module.scss"
import React, { useState, useEffect } from 'react';

const InfoFilme = ({ filmeDestaqueParams }) => {

    const [filmeDestaque, setfilmeDestaque] = useState('');

    const [titlecomposto, settitlecomposto] = useState([]);

    useEffect(() => {
        setfilmeDestaque(filmeDestaqueParams)
        if (filmeDestaqueParams.name !== undefined || filmeDestaqueParams.name != null || typeof filmeDestaqueParams.name != "undefined") {
            const t = filmeDestaqueParams.name.replace(":", ":@")
            settitlecomposto(t.split("@"))
        }
    }, [filmeDestaqueParams]);

    return (
        <div className={styles.conteudo_banner_home}>
            <p className={styles.title}>{titlecomposto[0]}</p>

            {titlecomposto.length === 2 ? <p className={styles.title}>{titlecomposto[1]}</p> : ""}

            <div className={styles.assistir_moreinfo_flex}>
                <div className={styles.assistir}><i className="fa-solid fa-play"></i> Assistir</div>
                <div className={styles.moreinfo}><i className="fa-solid fa-info"></i> Mais informações</div>
            </div>
        </div>
    );
}

export default InfoFilme;