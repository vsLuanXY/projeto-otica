import React from 'react';
import './estilo.css';

export default function(){
    return(
        <section id='contato' className='secao-contato'>
        <div className='limitar-sessao'>
            <div>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>
           <div className='contato-container'>
                 <div className='contato-conteudo'>
                    <h4>Contato</h4>
                    <p> <img src ='./assets/local.png' alt=''></img>  Nova Iguaçu, RJ</p>
                    <p> <img src='./assets/telefone.png' alt=''></img> (21) 9999-9999</p>
                    <p><img src='./assets/email.png' alt=''></img> contato@oticavida.com</p>
                </div>
                <div className='contato-conteudo'>
                    <h4>Nossas Redes Sociais</h4>
                    <p><img src='./assets/fb.png' alt=''></img> /OticaVida</p>
                    <p><img src='./assets/ig.png' alt=''></img> @oticavidarj</p>
                    <p><img src='./assets/tt.png' alt=''></img> @oticavidarj</p>
                </div>
            </div>
        </div>
        </section>
    )
} 