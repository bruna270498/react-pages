import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import '../style/componentes/contato.sass'

export default function Contato() {
    return(
        <section className="contatos" >
            <a className="contato" href="https://www.linkedin.com/in/bruna-almeida-soares/">
                <p className="contato1" ><AiFillLinkedin /></p>
            </a>
            <a className="contato" href='https://api.whatsapp.com/send?phone=5575983745556&text=Ol%C3%A1,%20Me%20chama%20l%C3%A1%20no%20zap'>
                <p className="contato1" ><BsWhatsapp /></p>
            </a>
            <a className="contato" href='https://github.com/bruna270498'>
                <p className="contato1" ><AiFillGithub /></p>
            </a>
        </section>
    )
}