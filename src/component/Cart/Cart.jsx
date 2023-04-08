import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <div>Order summery:{cart.length}</div>
            {
                cart.map(tshirt => <div key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;