import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import {removeItemFromCartAction } from '../actions/cart';

function CartItem(props) {
    const [isDeleting, setIsDeleting] = useState(false)
    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isDeleting) return
        // update state
        setIsDeleting(true)
        // send the actual request
        props.dispatch(removeItemFromCartAction(props.index))
        // once the request is sent, update state again
        setIsDeleting(false)
      }, [isDeleting]) // update the callback if the state changes

    // useEffect(()=>{
    //     console.log(props);
    // }, [props])

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

    return (
        <div className="cartSliderItem">
            <img alt={props.cartItem.Name + " image"} src={props.cartItem.image[0]} srcSet={`${ props.cartItem.image[0]} 1x, ${props.cartItem.image[1]} 2x, ${props.cartItem.image[2]} 3x`} className="cartSliderItemImage" />
            <div className="cartSliderItemInfo">
                <h2 className="cartSliderItemName">{props.cartItem.name}</h2>
                <h3 className="cartSliderItemAmount">{props.cartItem.amount}</h3>
                <p onClick={sendRequest} className="cartSliderItemRemoveButton">Remove</p>
            </div>
            <h4 className="cartSliderItemPrice">${addZeroes(props.cartItem.price)}</h4>
        </div>
    )
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(CartItem);