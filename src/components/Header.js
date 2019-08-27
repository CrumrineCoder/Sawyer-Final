import React, { useState, useEffect, useCallback } from 'react';
import logo from "../assets/icons/logo.svg"
import cartIcon from "../assets/icons/cartIcon.svg"
import { connect } from 'react-redux';
import { openCartAction } from '../actions/cart';

function Header(props) {
    const [isSending, setIsSending] = useState(false)

    const sendRequest = useCallback(async () => {
      // don't send again while we are sending
      if (isSending) return
      // update state
      setIsSending(true)
      // send the actual request
      props.dispatch(openCartAction())
      // once the request is sent, update state again
      setIsSending(false)
    }, [isSending]) // update the callback if the state changes
  
    return (
        <div className="nav">
            <img alt="Macarons logo" className="leftNavItem" alt="Logo" src={logo}></img>
            <div className="rightNavContainer">
                <span className="rightNavLinks">
                    <li className="rightNavItem">Menu</li>
                    <li className="rightNavItem">Beverages</li>
                    <li className="rightNavItem">Gifts</li>
                </span>
                <span onClick={sendRequest} className="rightNavCart">
                    <li className="rightNavItem">
                        <img className="rightNavCartIcon" alt="cartIcon" src={cartIcon}></img>
                        {props.response.cart.cartItems.length > 0 && <span className="cartNumber"> {props.response.cart.cartItems.length}</span>}
                    </li>
                    <li className="rightNavItem">Cart</li>
               
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(Header);