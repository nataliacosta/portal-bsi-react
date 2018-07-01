import React from 'react';

const Footer = () => {
    return (
        <footer className="d-none d-lg-block">
            <div id="RodapeMenu">
                <div id="facebook"><a href="https://www.facebook.com/bsiunirio"><img src="/images/iFacebook.png" alt="Facebook"/></a></div>
                <ul>
                    <li><a href="/bsi">BSI</a></li>
                    <li><a href="/disciplinas">DISCIPLINAS</a></li>
                    <li><a href="/professores">PROFESSORES</a></li>
                    <li><a href="/alunos">ALUNOS</a></li>
                    <li><a href="/oportunidades">OPORTUNIDADES</a></li>
                    <li><a href="/tcc">TCC</a></li>
                    <li><a href="/secretaria">SECRETARIA</a></li>
                    <li><a href="/institucional">INSTITUCIONAL</a></li>
                    <li><a href="/noticias">NOT&Iacute;CIAS</a></li>
                </ul>
            </div>

            <div id="RodapeLocalizacao"><p><a href="https://maps.google.com.br/maps?q=bsi+unirio&hl=pt&ll=-22.916026,-43.2724&spn=0.343422,0.676346&sll=-22.916032,-43.447416&sspn=0.343422,0.676346&hq=bsi+unirio&t=m&z=11&iwloc=A" id="imgLocal"><img src="/images/iLocal.png" alt="mapa"/>CCET - Avenida Pasteur, 458 - Urca - Rio de Janeiro / RJ - CEP: 22290-240</a>
                <br/>
                Telefone: (21)3873-6400</p>
            </div>
        </footer>

    )
}

export default Footer;