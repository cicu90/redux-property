import React from "react";
import HouseItem from "../../components/HouseItem/HouseItem";
// import './DashboardProducts.scss';



const DashboardProducts = () => {

    return(
        <div>
            <div className="grid">
                <div className="col-3">
                    <p>Image</p>
                </div>
                <div className="col-3">
                    <p>Adress</p>
                </div>
                <div className="col-1">
                    <p>Price</p>
                </div>
                <div className="col-3">
                    <p>Cararteristics</p>
                </div>
                <div className="col-1">
                    <p>Mark as Sold</p>
                </div>
                <div className="col-1">
                    <p>Remove</p>
                </div>
            </div>
            <HouseItem/>
        </div>
    )
};

export default DashboardProducts;
