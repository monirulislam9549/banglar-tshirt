import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';



const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handleAddToCart = (tShirts) => {
        const exists = cart.find(ts => ts._id === tShirts._id)
        if (exists) {
            toast('You have already added this')
        }
        else {
            const newCart = [...cart, tShirts]
            setCart(newCart)
        }
    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;