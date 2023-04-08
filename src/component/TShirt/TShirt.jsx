import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { id, picture, name, price } = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            {/* <p>Gender:{gender}</p> */}
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;