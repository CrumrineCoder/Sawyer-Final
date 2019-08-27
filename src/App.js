import React, { useState, useEffect } from 'react';

import './App.scss';
import { connect } from 'react-redux';
import routes from './routes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSlider from "./components/CartSlider";

function App(props) {
  return (
    <div className="wrap">
      <Header />
      {props.cart.cartIsOpen && <CartSlider />}
      <div className={props.cart.cartIsOpen ? "mask" : ""}>
        <div className="bodyContainer">
          {routes}
        </div>
        <Footer />
      </div>
    </div>

  );
}


export default connect((state) => state)(App);