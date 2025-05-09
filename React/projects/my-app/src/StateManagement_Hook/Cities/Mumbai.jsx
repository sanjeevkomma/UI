import React from 'react';
import Banglore from "./Banglore";
import {useData} from "../Context/ExampleContext";

const Mumbai = () => {

    const {surprise} = useData();
    return (
        <div>
            <h1>Mumbai</h1>
            <h2>My name is {surprise.captain}</h2>
            <Banglore />

        </div>
    );
}
export default Mumbai;
