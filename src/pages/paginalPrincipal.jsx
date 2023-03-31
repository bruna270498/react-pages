import React from 'react';
import BarraNav from '../componentes/barraNav';
import Conhecimento from '../componentes/conteinerConhecimento';
import Projetos from '../componentes/conteinerProjetos';
import SobreMim from '../componentes/conteinerSobreMim';
import Footer from "../componentes/footer";

export default function Principal(){
    return(
        <div>
            <BarraNav />
            <SobreMim />
            <Conhecimento />
            <Projetos />
            <Footer />
        </div>
    )
}