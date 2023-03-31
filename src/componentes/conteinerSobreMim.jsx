import bruna from '../imagem/bruna.jpeg';
import Contato from './conteinerContato';
import '../style/componentes/sobreMim.sass'

export default function SobreMim() {
    return(
        <div id='sobreMim' className='divSobre' >
          <img className='img' src={bruna} alt='minha foto' />
        <section clasName="sobreMim">
            <h1 className='titulo'>Sobre Mim</h1>
            <h3 className='nome'>Bruna Almeida Soares</h3>
            <h3 className='texto'>Desenvolvedora Front-end</h3>
            <p className='texto'>
               Olá, me chamo Bruna tenho 24 anos, sou natural de Rio grande da Serra no interior de São Paulo, 
               atualmente moro em Santo Antônio de Jesus - BA onde posso dizer com toda certeza 
               que é um bom lugar para viver.
               <br/>
               <br/>

               Me interessei pela programação quando estava estudando para um concurso público, 
               nas aulas achei fascinante como um código  se tornava uma pagina web e percebi 
               que programar não é nada monótono mas sim desafiador.
               <br/>
               <br/>

               E assim iniciei uma nova etapa da minha vida onde me lancei na programação. 
               Atualmente estudo desenvolvimento web na trybe,onde já me formei em desenvolvedor 
               Front-end, mas além das hard skills, estou colocando em prática as soft skills e metodologias ágeis.
            </p>
           <Contato />
        </section>
        </div>
    )
}