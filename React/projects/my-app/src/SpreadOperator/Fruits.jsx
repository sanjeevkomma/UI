import React from "react";

const one = ["apple", "banana", "mango"];
const two = ["orange", "grapes", "pineapple"];
const three = ["watermelon", "strawberry", "cherry"];

const fruits = [...one, ...two, ...three];

const obj1 = { a : 1, b : 2, c : 3 };
const obj2 = { d : 4, e : 5, f : 6 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const Fruits = () => {
  return <div>{fruits}{obj3.a}
  </div>;
};

export default Fruits;