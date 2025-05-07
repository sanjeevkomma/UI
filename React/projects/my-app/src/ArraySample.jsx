import React from 'react';
import {userData} from "./data";

let arr = ["Apple", "Banana", 35, {"userName": "sanjeev", "city": "Hyderabad"}];

let players = [{
    "player1": "Sanjeev",
    "player2": "Rahul",
    "player3": "Ravi"
}]

const ArraySample = () => {

    return (
        <div>
            <h1>{arr[0]} is red in color</h1>
            <h1>{arr[2]}</h1>
            <h1>{arr[3].userName}</h1>
            <h1>
                {players.map((item) => {
                    return (<div>{item.player3}</div>)
                })}
            </h1>
            <div>
                {userData.map((user) => {
                    return (
                        <div style={{border: "2px solid blue"}}>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.address.city}</div>
                            <div>{user.company.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ArraySample;