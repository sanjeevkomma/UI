import React from 'react';
import TestComp from './TestComp';

const Mango = () => {
    return <h1>Mangos are sweet</h1>;
};

const Grapes = () => {
    return <h2>Grapes are delicious</h2>;
};

function Sample() {
    return (
        <div> Sample
            <Mango/>
            <Grapes/>
            <TestComp/>
        </div> );
}

export default Sample;