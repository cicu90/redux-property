import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import Header from "../src/components/Header/Header";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons



function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage/>}>
    </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
