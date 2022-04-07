// import React from 'react';
import axios from "axios";


export const simpleSearchRequest = async(value) => {
  const url = "http://localhost:4000/properties?q=" + value;
  console.log(2, url);
  await axios.get(url).then((res) => {
    console.log(3, res);
    return res.data.response
  })

}