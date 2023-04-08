import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ ring }) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Sabil</Cousin>
                <Cousin hasFriend={true} ring={ring}>Kabil</Cousin>
            </section>
        </div>
    );
};

export default Aunty;