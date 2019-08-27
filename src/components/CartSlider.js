import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { closeCartAction, removeItemFromCartAction } from '../actions/cart';
import CartItem from "./CartItem.js"

function CartSlider(props) {
    const [cartItems, setCartItems] = useState();
    const [total, setTotal] = useState(0);
    const [isSending, setIsSending] = useState(false);
    //const [isDeleting, setIsDeleting] = useState(false)

    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        props.dispatch(closeCartAction())
        // once the request is sent, update state again
        setIsSending(false)
    }, [isSending]) // update the callback if the state changes

    // const sendDeleteRequest = useCallback(async (index) => {
    //     console.log(index);
    //     // don't send again while we are sending
    //     if (isDeleting) return
    //     // update state
    //     setIsDeleting(true)
    //     // send the actual request
    //     props.dispatch(removeItemFromCartAction(index))
    //     // once the request is sent, update state again
    //     setIsDeleting(false)
    //   }, [isDeleting]) // update the callback if the state changes

    // Taken from stackoverflow, it just adds .00 to numbers that don't have it basically
    function addZeroes(num) {
        // Cast as number
        var num = Number(num);
        // If not a number, return 0
        if (num == null) {
            return 0;
        }
        // If there is no decimal, or the decimal is less than 2 digits, toFixed
        if (String(num).split(".").length < 2 || String(num).split(".")[1].length <= 2) {
            num = num.toFixed(2);
        }
        // Return the number
        return num;
    }

    // Build the cart items by looping over the redux store, or if there's no items in the redux store then we'll just tell the user there are no items
    useEffect(() => {
        if (props.response.cart.cartItems.length > 0) {
            setCartItems(
                <div className="cartSliderItemContainer">
                    {props.response.cart.cartItems.map((cartItem, index) =>
                        <CartItem cartItem={cartItem} index={index} key={index} />
                    )}
                </div>
            );
        } else {
            setCartItems(
                <div className="cartSliderItemContainer">
                    <p className="cartSliderDisclaimer">There are no items to be displayed.</p>
                </div>
            );
        }
        let total = 0;
        for (var i = 0; i < props.response.cart.cartItems.length; i++) {
            total += props.response.cart.cartItems[i].price;
        }
        setTotal(total);
    }, [props.response.cart]);

    return (
        <div className="cartSlider">
            <p onClick={sendRequest} className="cartSliderClose">Close</p>
            <h1 className="cartSliderHeader">My Cart</h1>
            {cartItems}
            <h2 className="cartSliderTotal"><span className="cartSliderTotalTag">Total</span><span className="cartSliderTotalPrice">${addZeroes(total)}</span></h2>
            <button className="cartSliderCheckoutButton">Continue to Checkout</button>
        </div>
    )
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(CartSlider);