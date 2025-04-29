let num1 = 4;
let num2 = 2;
console.log(num1 + num2); // prints 6

let num3 = true;
let num4 = true;

let result = num3 + num4;

console.log("result : " + result); // prints 2 : true = 1 ( Truthy value ), false = 0 (Falsy value)


let num = 4;
num = num + 2;
num += 3;
num ++; // post increment
num = num - 5;
++num; // pre increment
console.log("num : " + num); // prints 6

let x = num ++;
console.log(x,num); // prints 6 7

let y = ++ num;
console.log(y,num); // prints 8 8

let a = 4;
let result2 = Math.pow(4,3);
console.log("result2 : " + result2); // prints 64
