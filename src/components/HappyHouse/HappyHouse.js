import React, { useState } from 'react';
// import './HappyHouse.scss';
// import Button from "../Button/Button";

  function HappyHouse() {
    const [city, setcity] = useState('');
    const handleChangeInput = ({ target }) => {
    setcity(target.value)
  };

  return (
    <div className="HappyHouse-container">
      <h2>Here You will find THE best deals on your favorite houses</h2>
      <p>What are you waiting for? </p>
      <p>Click below and search for your dream house</p>
      <input className="form-control mt-2"
        type="text"
        placeholder="Enter city"
        onChange={handleChangeInput}
      />
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
    </div>
  );
}



export default HappyHouse;
