import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "../pages/Home"
import Series from "../pages/Series"
import Filmes from "../pages/Filmes"
import Bombando from "../pages/Bombando"
import MinhaLista from "../pages/MinhaLista"
import Banner from "../components/layout/Banner"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import { listafilmes } from "../requisicoes/requisicoes"



const Rotas = () => {
    const [filmes, setfilmes] = useState('');
    const [filmeDestaque, setfilmeDestaque] = useState("")

    useEffect(() => {
        async function req() {
            const allFilmes = await listafilmes();
            setfilmes(allFilmes);
            const destaque = await allFilmes[0].lista.results[Math.floor(Math.random() * (allFilmes[0].lista.results.length - 1))]
            setfilmeDestaque(destaque)
        }
        req();
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Banner filmebanner={filmeDestaque} />
            <Routes>
                <Route path="/" index element={<Home filmesparams={filmes} />} />
                <Route path="/series" element={<Series filmesparams={filmes} />} />
                <Route path="/filmes" element={<Filmes />} />
                <Route path="/bombando" element={<Bombando />} />
                <Route path="/minhalista" element={<MinhaLista />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    );
}

export default Rotas;