import React from 'react';
import TryWallet from '../imagem/tryWallet.png'
import Tryunfo from '../imagem/tryunfo.png'
import TryTunes from '../imagem/tryTunes.png'
import Test from '../imagem/test.png'
import '../style/componentes/projetos.sass'

export default function Projetos() {
    return(
        <div className='projetos' >

            <h1 className='titulo2' id="projetos">Projetos</h1>
        <section className='sectionProj' id="projetos">
            <a 
                 className='link' 
                 target='blank' 
                 href="https://github.com/bruna270498/Project-TrybeWallet"
            >
                <h3 className='titulo3'>TrybeWallet</h3>
                <img className='imgProjeto' src={TryWallet} alt='Walet' />
            </a>
            <a 
                 className='link' 
                 target='blank' 
                 href="https://github.com/bruna270498/Project-Tryunfo"
            >
                <h3 className='titulo3'>Tryunfo</h3>
                <img className='imgProjeto' src={Tryunfo} alt='Trunfo' />
            </a>
            <a 
                 className='link'
                 target='blank'
                 href="https://github.com/bruna270498/Projeto-React-Testing-Library"
            >
                <h3 className='titulo3'>React Testing Library</h3>
                <img className='imgProjeto' src={Test} alt='teste React' />
            </a>
            <a
                className='link'
                target='blank'
                href='https://github.com/bruna270498/Project-Trybetunes'
            >
                <h3 className='titulo3'>TrybeTunes</h3>
                <img className='imgProjeto' src={TryTunes} alt='TrybeTunes' />
            </a>
            {/* <a className='link' href='https://github.com/bruna270498/Frontend-online-store'>
                <h3 className='titulo3'>Loja Online</h3>
                <img className='imgProjeto' src={TrybeWalet} alt='Loja' />
            </a> */}
        </section>
            <a 
                className='btnPai'
                target='blank'
                href='https://github.com/bruna270498?tab=repositories'
            >
               <button className='btn'  type='Button'>Confira meu repositorio</button>
               </a>
        </div>
    )
}