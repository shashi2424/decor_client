import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantLandingPage from "demos/RestaurantLandingPage";
import './App.css'
export default function App() {


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<RestaurantLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}


