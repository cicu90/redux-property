import React from 'react';
import './HouseItem.scss';

import logo from "../../images/logo.png"; //imagen provisional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import fontawesome

const HouseItem = ({property}) => {

return (
    <div className="HouseItem">
        <article className="grid">
                <div className="col-2">
                    <img alt="" src={property.image} />
                </div>
                <div className="col-3">
                    <p className="bold">{property.street}</p>
                    <p>{property.country}</p>
                </div>
                <div className="col-2">
                    <p>{property.price}</p>
                </div>
                <div className="col-3">
                    <p>
                        <FontAwesomeIcon icon={solid('bed')} /> {property.room} |
                        <FontAwesomeIcon icon={solid('toilet')} /> {property.bath} |
                        <FontAwesomeIcon icon={regular('square')} /> {property.size}m<sup>2</sup>
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
