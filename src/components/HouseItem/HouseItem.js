import React from 'react';
import './HouseItem.scss';

import logo from "../../images/logo.png"; //imagen provisional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import fontawesome

const HouseItem = () => {

return (
    <div className="HouseItem">
        <article className="grid">
                <div className="col-2">
                    <img alt="" src={logo} />
                </div>
                <div className="col-3">
                    <p className="bold">C/ La Sabinita, Prueba, nº16</p>
                    <p>38500, Tenerife, España</p>
                </div>
                <div className="col-2">
                    <p>450,000</p>
                </div>
                <div className="col-3">
                    <p>
                        <FontAwesomeIcon icon={solid('bed')} /> 2 |
                        <FontAwesomeIcon icon={solid('toilet')} /> 1 |
                        <FontAwesomeIcon icon={regular('square')} /> 105m<sup>2</sup>
                    </p>
                </div>
                <div className="col-1">
                    <i className="pi pi-euro"/>
                </div>
                <div className="col-1">
                    <i className="pi pi-trash"/>
                </div>
            </article>
    </div>
    )
};


export default HouseItem;
