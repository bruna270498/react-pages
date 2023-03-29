import { SiHtml5, SiCss3, SiJest, SiTestinglibrary, 
    SiBootstrap, SiRedux, SiBulma } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import '../style/componentes/conhecimentos.sass'

export default function Conhecimento() {
    return(
        <div>
            <h1 className="titulo2" id="conhecimento">Conhecimento</h1>

        <section className="conhecimento">
            <div className="linguagens">
                 <p className="icon"><SiHtml5 /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><DiJavascript1 /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><SiCss3 /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><FaReact /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><AiFillGithub /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><SiJest /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><SiTestinglibrary /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><SiBootstrap /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><SiRedux /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><SiBulma /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><FaSass /></p>
            </div>
            <div className="linguagens">
                <p className="icon"><FiFigma /></p>
            </div>
        </section>
        </div>
    )
}