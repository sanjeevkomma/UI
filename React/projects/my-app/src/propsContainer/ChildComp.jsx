import React from 'react';
const ChildComp = (props) => {

    const {model, year, dealer, color} = props.car; // Prop De-structuring

    return (
        <selection>
        <div>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
            <div>Dealer: {dealer}</div>
            <div>Color: {color}</div>
        </div>
        </selection>
    );
}
export default ChildComp;