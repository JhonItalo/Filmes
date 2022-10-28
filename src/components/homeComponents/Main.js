import { useState, useEffect } from "react";
import styles from "./Main.module.scss"
import Slide from "./Slide"
    
function Main({ filmesparams }) {
    const [filmes, setfilmes] = useState(filmesparams)

    useEffect(() => {
        setfilmes(filmesparams)
    }, [filmesparams])

    return (
        <div className={styles.container_listas}>
            {(filmes !== undefined && filmes != null && filmes !== "") &&
                <>
                    {filmes.map((item) => (
                        <div key={item.titulo} className={styles.lista_item}>
                            <h3 >{item.titulo}</h3>
                            <Slide item={item}></Slide>
                        </div>
                    ))}

                </>
            }
        </div >
    );
}
export default Main;