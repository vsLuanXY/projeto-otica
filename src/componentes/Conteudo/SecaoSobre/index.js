import React from 'react';
import './estilo.css';

export default function SecaoSobre(){ 
    return(
        <section id='sobre' className='secao-sobre'>
                <div className='limitar-secao'> 
                    <h1>QUEM SOMOS NÓS?</h1>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao 
                        público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>                    
                
                   <div className='container-card'>
                        <img src='./assets/loja.png' alt=''></img>
                        <div className='card'>
                            <h1>Nossas Filiais</h1>
                            <p> Hoje temos mais de 20 filiais pelo Brasil e na América Atendimento flexível
                            Nossa equipe possui é treinada para te atender</p>
                        </div>
                      
                        <div className='card'>
                            <h1>ATENDIMENTO FLEXÍVEL</h1>
                            <p>Nossa equipe possui é treinada para te atender</p>
                        </div> 
                        <img src='./assets/atendimento.png' alt=''></img>
                 </div>
                 
                 </div>
        
            
        </section>
    );
}