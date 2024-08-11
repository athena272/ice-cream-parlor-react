import './Footer.css';
import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className=' limitar-secao container-logo-informacoes'>
                <img src='assets/logo.png' alt='logomarca' />
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Realmente importa?</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p> Meu site:
                        <a href="https://athena272portfolio.vercel.app/" target="_blank" rel="noreferrer" >Portfólio</a>
                    </p>
                    <p>Insta:
                        <a href="https://www.instagram.com/guigo_rosario/" target="_blank" rel="noreferrer">@guigo_rosario</a>
                    </p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>8:00 - 22:00</p>
                </div>
            </div>
            <div className='limitar-secao direito-autoral'>
                <p>Gelateria. Orgulhosamente desenvolvido por <span><a href="https://github.com/athena272" target='_blank' rel="noreferrer">Guilherm R. Alves</a></span></p>
            </div>
        </footer>
    )
}
