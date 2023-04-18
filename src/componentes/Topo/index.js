import React from 'react';
import './estilo.css';


export default function Topo(){
    return(
        <header>
            <div className='limitar-secao'>
                <img src="./assets/logo.png" alt=""></img>
                <nav>
                    <a href="#produto">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}