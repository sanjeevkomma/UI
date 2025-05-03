import React from 'react';
const ChildComp = (props) => {

    const {model, year, dealer, color} = props.car; // Prop Destructuring

    return (
        <selection>
            <h1>This is child component</h1>
            <h2>Model: {model}</h2>
            <h2>Year: {year}</h2>
            <h2>Dealer: {dealer}</h2>
            <h2>Color: {color}</h2>
        </selection>
    );
}
export default ChildComp;