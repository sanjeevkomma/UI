import React from 'react';
import {useData} from "../Context/ExampleContext";


const Hyderabad = () => {

    const {surprise} = useData();

    return (
        <div>
            <h4> I am Hyderabad, <span style={{color: "red"}}>{surprise.game}</span> Received from Delhi</h4>
        </div>
    );
}
export default Hyderabad;