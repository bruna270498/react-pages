import {useState} from 'react'
import { BsList } from "react-icons/bs";
import '../style/componentes/barraNav.sass'

function BarraNav() {
   const [showElement, setShowElement] = useState(false);
  const handleButton = () => showElement === false ? setShowElement(true) : setShowElement(false);

    return(
        <div className="nav">
        <h2 className="nome">Bruna Almeida</h2>
        <nav className='navLink'>
            <a className='links' href="#sobreMim">Sobre mim</a>
            <a className='links' href="#conhecimento">Conhecimentos</a>
            <a className='links' href="#projetos">Projetos</a>
        </nav>
        <div className='div-btn-nav'>
             <button className="btn-nav" onClick={handleButton}><BsList /></button>
             { showElement ? <ul className='list-nav'>
                 <li className='list-navL'>
                    <a onClick={handleButton} className='links-nav' href="#sobreMim">Sobre mim</a>
                </li>
                 <li className='list-navL'>
                    <a onClick={handleButton} className='links-nav' href="#conhecimento">Conhecimentos</a>
                    </li>
                 <li className='list-navL'>
                    <a onClick={handleButton} className='links-nav' href="#projetos">Projetos</a>
                    </li>
             </ul> : null
             }
        </div>
    </div>
    )
};

export default BarraNav;