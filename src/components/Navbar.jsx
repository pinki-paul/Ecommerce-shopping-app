import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import './navbar.css';

function Navbar(){
    return(
        <div className='navbar'>
          <div className='links'>
             <Link to='/'>Products</Link>
             <Link to='/cart'>Cart <ShoppingCart size={25}/></Link>
          </div>
        </div>
    )
}

export default Navbar;