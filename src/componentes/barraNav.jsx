import '../style/componentes/barraNav.sass'

export default function barraNav() {
    return(
        <div className="nav">
        <h2 className="nome">Bruna Almeida</h2>
        <nav className='navLink'>
            <a className='links' href="#sobreMim">Sobre mim</a>
            <a className='links' href="#conhecimento">Conhecimentos</a>
            <a className='links' href="#projetos">Projetos</a>
        </nav>
    </div>
    )
}