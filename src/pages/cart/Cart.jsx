import React, { useContext } from 'react';
import PRODUCTS from '../../products';
import { ShopContext } from '../../context/Shop-context';
import CartItem from './Cart-item';
import './cart.css';

import {useNavigate} from 'react-router-dom';

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div>
                <h1 className='cartHeading'>Your Cart</h1>
            </div>
            <div className='cartItems'>
                {
                    PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                    })
                }
            </div>

            { totalAmount > 0 ?
            <div className='checkout'>
                <p className='subtotal'> Subtotal: ${totalAmount}</p>
                <button className='shoppingbtn' onClick={() => navigate('/')}>Continue Shop</button>
                <button className='checkoutbtn'>Checkout</button>
            </div>
           : <h1 className='emptyHeading'>Your cart is empty</h1>}
        </div>
    )
}

export default Cart;