import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { addItemToCartAction } from '../actions/cart.js';
//import { getMenuItemsAction } from '../actions/menu.js';

function MenuItem(props) {
    const [stateMenu, setStateMenu] = useState({ _id: props._id, amount: props.amount, description: props.description, image: props.image, name: props.name, price: props.price });
    const [readMore, setReadMore] = useState(false);
    const [description, setDescription] = useState(<p className="menuItemDescription">{stateMenu.description[0]}</p>);
    const [isSending, setIsSending] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    // Wasn't sure if the cart should also be opened when an item is added, but it'd be very easy to do.
    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        props.dispatch(addItemToCartAction(stateMenu))
        // once the request is sent, update state again
        setIsSending(false)
    }, [isSending]) // update the callback if the state changes

    // We're checking if the Redux store for our cart has our object in it. Currently doesn't differentiate between items nor does quantity.
    function checkIfAdded() {
        setIsAdded(props.response.cart.cartItems.some(e => e._id === props._id));
    }

    // Get the relevant data for displaying the Menu item and add to state as well as continue checking the redux store.
    useEffect(() => {
        checkIfAdded();
        setStateMenu({ _id: props._id, amount: props.amount, description: props.description, image: props.image, name: props.name, price: props.price });
    }, [props])

    // If read more is enabled (disabled by default), then we're going to display every paragraph tag. If not, we just display the first. 
    useEffect(() => {
        if (readMore) {
            setDescription(
                <div>
                    {stateMenu.description.map(text =>
                        <p className="menuItemDescription">{text}</p>
                    )}
                </div>
            )
        } else {
            setDescription(
                <p className="menuItemDescription">{stateMenu.description[0]}</p>
            )
        }
    }, [readMore])

    function toggleReadMore() {
        setReadMore(!readMore);
    }

    return (
        <div className="menuItem">
            <img alt={stateMenu.name + " image"} className="menuItemImage" srcSet={`${ stateMenu.image[0]} 1x, ${stateMenu.image[1]} 2x, ${stateMenu.image[2]} 3x`} src={stateMenu.image[0]}></img>
            <div className="menuItemInfo">
                <h2 className="menuItemName">{stateMenu.name}</h2>
                <h3 className="menuItemAmount">{stateMenu.amount}</h3>
                {description}
                {stateMenu.description.length > 1 && <p className="readMore" onClick={toggleReadMore}>{readMore ? "Read Less" : "Read More"}</p>}
            </div>
            <div className="menuItemPayment">
                <h4 className="menuItemPaymentPrice">${stateMenu.price}/ea.</h4>
                <button disabled={isSending || isAdded} onClick={sendRequest} className={"addToCartButton " + (isAdded ? "addedToCart" : "")}>{isAdded ? String.fromCharCode(10003) + " Added To Cart" : "+ Add to Cart"}</button>
            </div>
        </div>
    )
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps)(MenuItem);