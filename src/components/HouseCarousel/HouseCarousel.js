import React, { useState } from "react";
import "./HouseCarousel.scss";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import {getHouses} from '../../services/houseService'

const HouseCarousel = () => {
  const [city, setcity] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const houseList = getHouses();
  console.log(houseList);

  const houseTemplate = (house) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            <img className="img-carousel"
              src={house.image}
              onError={(e) =>
                (e.target.src ="../images/img1.jpg")
              }
              alt={house.name}
            />
          </div>
          <div>
            <h4 className="mb-1">{house.street}</h4>
            <h6 className="mt-0 mb-3">${house.price}</h6>
            {/* <span
              className={`product-badge status-${house.inventoryStatus.toLowerCase()}`}
            >
              {house.inventoryStatus}
            </span> */}
            <div className="car-buttons mt-5">
              <Button
                icon="pi pi-search"
                className="p-button p-button-rounded mr-2"
              />
              <Button
                icon="pi pi-star-fill"
                className="p-button-success p-button-rounded mr-2"
              />
              <Button
                icon="pi pi-cog"
                className="p-button-help p-button-rounded"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (

  <div className="HouseCarousel">
    <div className="card">
      <Carousel
        value={houseList}
        numVisible={2}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={houseTemplate}
        header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>}
      />
    </div>
  </div>
  )
};

export default HouseCarousel;
