import React from 'react';
import iBSI from '../assets/images/iBSI.png';
import { openNav, closeNav } from '../assets/js/offcanvas';
import '../assets/css/material-design-icons/css/material-icons.min.css';

const HeaderSmall = () => {
    return (
        <header className="header-min d-xs-block d-lg-none">
            <div className="container-small h-100">
                <div className="d-flex align-items-center justify-content-between h-100 ml-3 mr-3">
                    <i className="mdi mdi-3x mdi-menu text-white" onClick={openNav}></i>
                    <p className="subtitle-small">
                        <img src={iBSI} className="bsi-pequeno" alt="bsi"/>
                        <br/>BACHARELADO EM
                        <br/>
                        <span className="subtitle-smallGrande">
                            SISTEMAS DE
                            <br/>INFORMAÇÃO
                        </span>
                    </p>
                    <div width="40px"></div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSmall;