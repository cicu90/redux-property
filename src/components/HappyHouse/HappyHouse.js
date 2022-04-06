import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import HouseCarousel from '../HouseCarousel/HouseCarousel';
import './HappyHouse.scss';

  function HappyHouse() {
    const [city, setcity] = useState('');
    

  return (
    <div className="HappyHouse-container">
        <h2>Here You will find your favorite houses</h2>
        <p>What are you waiting for? </p>
        <p>Click below and search for your dream house</p>
        <span className="p-float-label">
                    <InputText id="Enter city"  value={city} onChange={(e) => setcity(e.target.value)} />
                    <label htmlFor="Enter city">Enter city</label>
                </span>
      <div className="HappyHouse-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          city={city}
        >
          SEARCH
        </Button> */}
      </div>
      <div className="grid carousel-container">
        <div className="PopularList col-6">
          <h2>Popular Listings</h2>
          <p>BUY</p>
          <HouseCarousel/>
        </div>
      </div>
    </div>
  );
}



export default HappyHouse;
