import React from 'react';

const Mango = () => {
    return <h1>Mangos are sweet</h1>;
};

const Grapes = () => {
    return <h2>Grapes are delicious</h2>;
};

function Sample() {
    return (<div> Sample
        <Mango/>
        <Grapes/></div>);
}

export default Sample;