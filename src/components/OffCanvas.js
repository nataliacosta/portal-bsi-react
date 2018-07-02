import React from 'react';
import { openNav, closeNav } from '../assets/js/offcanvas.js';
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
                    Object.keys(structure).map((key, i) => {
                        return (
                            <div>
                                <li className={"border-bottom b-" + key + " pl-2 w-100"} data-target={"#collapse" + key} data-toggle="collapse" aria-expanded="false">
                                    <a data-target={"#collapse"+key} href={"#collapse" + key} className="d-inline-flex align-items-center w-100">
                                        <img src={"/images/" + structure[key].icon + ".png"} alt={key} className="iconePequeno"/>
                                        <div className="titulo">{structure[key].subs[key].title}</div>
                                        <i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
                                        <i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
                                    </a>
                                </li>
                                <div className="collapse" id={"collapse" + key}>
                                    <OffCanvasSubitem page={key} items={structure[key].subs}/>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </nav>

    )
}
export default OffCanvas;