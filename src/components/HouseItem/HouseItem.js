import React from 'react';
import './HouseItem.scss';

import logo from "../../images/logo.png"; //imagen provisional

const HouseItem = () => {

  return (
      <div className="HouseItem">
        <article className="grid">
                <div className="col-3">
                    <img alt="" src={logo} />
                </div>
                <div className="col-4">
                    <p>Adress</p>
                </div>
                <div className="col-1">
                    <p>Price</p>
                </div>
                <div className="col-2">
                    <p>Cararteristics</p>
                </div>
                <div className="col-1">
                    <p>Mark as Sold</p>
                </div>
                <div className="col-1">
                    <p>Remove</p>
                </div>
            </article>
      </div>
    )
};


export default HouseItem;
