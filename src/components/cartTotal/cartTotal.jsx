import React, { Component } from 'react';
import dataContext from '../../context/dataContext';
import Cart from '../../cart/cart';
import ItemInCart from '../itemInCart/itemInCart';

import "./cartTotal.css";


class CartTotal extends Component {
    static contextType = dataContext;
    state = {  }
    render() { 
        return (
            <h3>{this.state.ItemInCart}</h3>
        );
    }
}
 
export default CartTotal;