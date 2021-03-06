import React from "react";
import {useSelector} from "react-redux"

import HouseItem from "../../components/HouseItem/HouseItem";
import SearchForm from "../../components/SearchForm/SearchForm";


import './DashboardProducts.scss';



const DashboardProducts = () => {
    const properties = useSelector((state) => state.properties)

    return(
        <div className="dashboardBody">
            <SearchForm/>
            <div className="grid titles">
                <div className="col-2">
                    <p>Image</p>
                </div>
                <div className="col-3">
                    <p>Adress</p>
                </div>
                <div className="col-2">
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
            {properties.map((property) => <HouseItem property={property}/>)}
        </div>
    )
};

export default DashboardProducts;
