import styles from "./Footer.module.scss"

function Footer() {

    return (
        <footer className={styles.footer}>
            <p>Todos direitos reservados a Filmes</p>
            <p>Dados retirados do TMDB</p>
            <p>Desenvolvido por John ìtalo Lucas Lima</p>
            <p>Este projeto não tem fins lucrativos</p>



        </footer>



    );
}

export default Footer;