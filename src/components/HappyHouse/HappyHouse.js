import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import HouseCarousel from '../HouseCarousel/HouseCarousel';
import './HappyHouse.scss';
import { useDispatch } from 'react-redux';
import { simpleSearch } from '../../redux/properties/actions'


  function HappyHouse() {
  const navigate = useNavigate();
    const [city, setcity] = useState('');
    const dispatch = useDispatch()
    const searchAction = () => {
      dispatch(simpleSearch(city))
      navigate('/dashboard')
    }

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
      <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" onClick={() => searchAction()}/>
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
