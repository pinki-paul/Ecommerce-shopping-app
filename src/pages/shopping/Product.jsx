import React, { useContext } from 'react';
import {ShopContext} from '../../context/Shop-context';

function Product(props) {
  const { id, productTitle, price, productImg, description } = props.data;
     const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
      <img src={productImg} />
      <div className='description'>
        <h1 className='heading'>{productTitle}</h1>
        <p className='productPara'>${price}</p>
        <p className='productDescription'>{description}</p>
      </div>
      <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product;