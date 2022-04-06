/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import Header from "../src/components/Header/Header";
import DashboardProducts from './pages/DashboardProducts/DashboardProducts';
import Footer from './components/Footer/Footer';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "/node_modules/primeflex/primeflex.css"; //primeflex



function App() {


  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardProducts/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
