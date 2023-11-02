import React,{useContext} from 'react';
import { ShopContext } from '../../context/Shop-context';

function CartItem(props) {
    const { id, productTitle, price, productImg, description } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src={productImg} />
            <div className='description'>
                <h1>{productTitle}</h1>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={()=> removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={()=> addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;