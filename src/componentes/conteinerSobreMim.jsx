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
            <h3 className='texto'>Desenvolvedora Full Stack</h3>
            <p className='texto'>
               Olá, me chamo Bruna tenho 24 anos, sou natural de Rio grande da Serra no interior de São Paulo, 
               atualmente moro em Santo Antônio de Jesus - BA onde posso dizer com toda certeza 
               que é um bom lugar para viver.
               <br/>
               <br/>
               Minha paixão pela programação surgiu enquanto estudava para um concurso público e fiquei 
               fascinada em como um simples código se transformava em uma página web. Percebi que a programação
               é muito mais do que uma atividade monótona, é um desafio constante.
               <br/>
               <br/>

               A partir disso, decidi me lançar em uma nova etapa da minha vida e estudar programação. 
               Atualmente, estou na Trybe estudando Desenvolvimento Web, já me formei como desenvolvedora 
               Front-end e, além das habilidades técnicas, estou praticando habilidades interpessoais e 
               metodologias ágeis.
            </p>
           <Contato />
        </section>
        </div>
    )
}