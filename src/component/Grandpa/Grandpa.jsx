import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('gold')
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond'
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h1>This is Grandpa</h1>
            <p>Has money: {money}</p>
            <section className='flex'>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='gold ring'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create context and export
 * 2. Create a provider and pass a value
 * 3. Use useContext to receive
 * 
 * 
 * */ 