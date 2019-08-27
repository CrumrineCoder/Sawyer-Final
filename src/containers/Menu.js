import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenuItemsAction } from '../actions/menu.js';
import MenuItem from "../components/MenuItem.js";

function Menu(props) {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        props.dispatch(getMenuItemsAction())
    }, [])

    // Build the Menu Items, and if the menu  items were to change then our components here would automatically update.
    useEffect(() => {
        if (props.response.menu) {
            if (props.response.menu.response != undefined) {
                setCartItems(
                    <div className="menuItemsContainer">
                        {props.response.menu.response.map((menuItem,index) =>
                            <MenuItem key={index} {...menuItem} />
                        )}
                    </div>
                )
            }
        }
    }, [props.response])
    return (
        <div className="menu">
            <h1 className="menuHeader">Menu</h1>
            {cartItems}
        </div>
    )
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(Menu);