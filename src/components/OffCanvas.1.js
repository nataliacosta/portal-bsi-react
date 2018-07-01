import React from 'react';
import { openNav, closeNav } from '../assets/js/offcanvas.js';
import iBSI from '../assets/images/iBSI.png';
import iAlunos from '../assets/images/iAlunos.png';
import iDisciplinas from '../assets/images/iDisciplinas.png';
import iInstitucional from '../assets/images/iInstitucional.png';
import iNoticias from '../assets/images/iNoticias.png';
import iOportunidades from '../assets/images/iOportunidades.png';
import iProfessores from '../assets/images/iProfessores.png';
import iSecretaria from '../assets/images/iSecretaria.png';
import iTCC from '../assets/images/iTCC.png';
import Aside from './Aside';
import structure from '../structure.json';
import OffCanvasSubitem from './OffCanvasSubitem';

const OffCanvas = (props) => {
    const { page, sub, sub2 } = props;
    return (
        <nav className="off-canvas" id="off-canvas">
            <div className="header_offcanvas d-inline-flex align-items-center justify-content-between w-100">
                <i className="mdi mdi-2x mdi-menu text-white"></i>
                <div>MENU</div>
                <i className="mdi mdi-2x mdi-close text-white" onClick={closeNav}></i>
            </div>
            <ul className="menuOffcanvas" id="menuOffcanvas">

                {
                    Object.values(structure).map((key) => {
                        return (
                            <div>
                                <li className="border-bottom b-bsi d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseBSI" aria-expanded="false">
                                    <img src={iBSI} alt="bsi" className="iconePequeno" />
                                    <div className="titulo">Bacharelado em <br/>Sistemas de Informação</div>
                                    <i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
                                    <i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
                                </li>
                                <div className="collapse" id="collapseBSI">
                                {
                                    Object.values(structure[key].subs).map((keySub) => {
                                        return (<OffCanvasSubitem page={key} sub={keySub} title={structure[key].subs[keySub].title} content={structure[key].subs[keySub].content} subitems={structure[key].subs[keySub].subs} />)
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </nav>

    )
}

/*
<li className="border-bottom b-bsi d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseBSI" aria-expanded="false">
<img src={iBSI} alt="bsi" className="iconePequeno" />
<div className="titulo">Bacharelado em <br/>Sistemas de Informação</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseBSI">
<Aside page={} />
</div>
<li className="border-bottom b-disciplinas d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseDisciplinas" aria-expanded="false">
<img src={iDisciplinas} alt="disciplinas" className="iconePequeno" />
<div className="titulo">Disciplinas</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseDisciplinas">
<Aside items={structure.disciplinas.subs} />
</div>
<li className="border-bottom b-alunos d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseAlunos" aria-expanded="false">
<img src={iAlunos} alt="alunos" className="iconePequeno" />
<div className="titulo">Alunos</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseAlunos">
<Aside items={structure.alunos.subs} />
</div>
<li className="border-bottom b-tcc d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseTCC" aria-expanded="false">
<img src={iTCC} alt="tcc" className="iconePequeno" />
<div className="titulo">TCC</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseTCC">
<Aside items={structure.tcc.subs} />
</div>
<li className="border-bottom b-professores d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseProfessores" aria-expanded="false">
<img src={iProfessores} alt="professores" className="iconePequeno" />
<div className="titulo">Professores</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseProfessores">
<Aside items={structure.professores.subs} />
</div>
<li className="border-bottom b-oportunidades d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseOportunidades" aria-expanded="false">
<img src={iOportunidades} alt="oportunidades" className="iconePequeno" />
<div className="titulo">Oportunidades</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseOportunidades">
<Aside items={structure.oportunidades.subs} />
</div>
<li className="border-bottom b-secretaria d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseSecretaria" aria-expanded="false">
<img src={iSecretaria} alt="secretaria" className="iconePequeno" />
<div className="titulo">Secretaria</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseSecretaria">
<Aside items={structure.secretaria.subs} />
</div>
<li className="border-bottom b-institucional d-inline-flex align-items-center pl-2 pr-2 w-100" data-toggle="collapse" data-target="#collapseInstitucional" aria-expanded="false">
<img src={iInstitucional} alt="institucional" className="iconePequeno" />
<div className="titulo">Institucional</div>
<i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
<i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
</li>
<div className="collapse" id="collapseInstitucional">
<Aside items={structure.institucional.subs} />
</div>
<li className="border-bottom b-noticias pl-2 pr-2 w-100">
<a href="/noticias" className="d-inline-flex align-items-center w-100 h-100">
    <img src={iNoticias} alt="noticias" className="iconePequeno" />
    <div className="titulo">Notícias</div>
</a>
</li>
</ul>
</nav> */
export default OffCanvas;