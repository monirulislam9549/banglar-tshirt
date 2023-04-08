import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h4>Brothers</h4>
            <p><small>{angti}</small></p>
        </div>
    );
};

export default Brother;