import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some product</p>
    }
    else {
        message = <div>
            <h3>Borolox</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <div><h2 className={cart.length === 1 ? 'salmon' : 'blue'}>Order summery:{cart.length}</h2></div>
            <p className={`bold ${cart.length === 3 ? 'tomato' : 'green'}`}>Something</p>
            {cart.length > 2 ? <span className='orange'>Aro Kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <div key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </div>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;

/*
1. Conditional Rendering
use if else to set a variable that will contain an element, components, or div
2. Ternary: condition ? 'for true': 'false'
3. Logical &&:(if the condition is true than the next thing will be displayed)
4. Logical ||:(if the condition is false than the next thing will be displayed)

Conditional CSS Class
1.use ternary
2.ternary inside template string
*/ 