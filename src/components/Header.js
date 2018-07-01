import React from 'react';
import iBSI from '../assets/images/iBSI.png';
import iAlunos from '../assets/images/iAlunos.png';
import iDisciplinas from '../assets/images/iDisciplinas.png';
import iInstitucional from '../assets/images/iInstitucional.png';
import iNoticias from '../assets/images/iNoticias.png';
import iOportunidades from '../assets/images/iOportunidades.png';
import iProfessores from '../assets/images/iProfessores.png';
import iSecretaria from '../assets/images/iSecretaria.png';
import iTCC from '../assets/images/iTCC.png';

const Header = (props) => {
    return (
        <header className="d-none d-lg-block">
            <div className="container-big">
                <nav className="d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <a href="/bsi" className="col-3 pt-0 pl-0 pbr-10 pb-0">
                                <div className={( props.page === "bsi" ? "iconeAtivo" : "icone") + " bsi w-100 h-100"}>
                                    <p className="subtitle">
                                        <img src={iBSI} className="icon"  alt="bsi"/>
                                        <br/>BACHARELADO  EM<br/>
                                        <span className="subtitleGrande">SISTEMAS DE<br/>INFORMAÇÃO</span>
                                    </p>
                                </div>
                            </a>
                            <div className="col-6 p-0">
                                <div className="container">
                                    <div className="row linha-maior">
                                        <a href="/disciplinas" className="col-3 pt-0 pl-0 pbr-10">
                                            <div className={( props.page === "disciplinas" ? "iconeAtivo" : "icone") + " disciplinas w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img className="icon" src={iDisciplinas} className="icon"  alt="disciplinas"/>
                                                    <br/>DISCIPLINAS
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/alunos" className="col-6 pt-0 pl-0 pbr-10">
                                            <div className={( props.page === "alunos" ? "iconeAtivo" : "icone") + " alunos w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img src={iAlunos} className="icon"  alt="alunos"/>
                                                    <br/>ALUNOS
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/tcc" className="col-3 pt-0 pl-0 pbr-10">
                                            <div className={( props.page === "tcc" ? "iconeAtivo" : "icone") + " tcc w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img className="icon" src={iTCC} className="icon"  alt="Trabalho de Conclusão de Curso"/>
                                                    <br/>TCC
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="row">
                                        <a href="/professores" className="col-3 pt-0 pl-0 pbr-10 pb-0">
                                            <div className={( props.page === "professores" ? "iconeAtivo" : "icone") + " professores w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img src={iProfessores} className="icon"  alt="Professores" />
                                                    <br/>PROFESSORES
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/oportunidades" className="col-3 pt-0 pl-0 pbr-10 pb-0">
                                            <div className={( props.page === "oportunidades" ? "iconeAtivo" : "icone") + " oportunidades w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img className="icon" src={iOportunidades} className="icon"  alt="oportunidades"/>
                                                    <br/>OPORTUNIDADES
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/secretaria" className="col-3 pt-0 pl-0 pbr-10 pb-0">
                                            <div className={( props.page === "secretaria" ? "iconeAtivo" : "icone") + " secretaria w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img className="icon" src={iSecretaria} className="icon"  alt="secretaria"/>
                                                    <br/>SECRETARIA
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/institucional" className="col-3 pt-0 pl-0 pbr-10 pb-0">
                                            <div className={( props.page === "institucional" ? "iconeAtivo" : "icone") + " institucional w-100 h-100"}>
                                                <p className="subtitle">
                                                    <img src={iInstitucional} className="icon"  alt="institucional"/>
                                                    <br/>INSTITUCIONAL<br/>>EIA-CCET-UNIRIO
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="/noticias" className="col-3 pt-0 pl-0 pbr-10 pb-0">
                                <div className={( props.page === "noticias" ? "iconeAtivo" : "icone") + " noticias w-100 h-100 semMargem"}>
                                    <p className="subtitle subtitleGrande">
                                        <img src={iNoticias} className="icon"  alt="notícias"/>
                                        <br/>NOTÍCIAS
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;