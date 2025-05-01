let str = String(6);
console.log(str, typeof str); // 6 string


let num = Number("123");
console.log(num, typeof num); // 123 number


let x;
console.log(x, typeof x); // undefined undefined

x = 8;
console.log(x, typeof x); // 8 number

x = x + "";
console.log(x, typeof x); // 8 string

x = x - 2;
console.log(x, typeof x); // 6 number

x = !x;
console.log(x, typeof x); // false boolean

console.log(Boolean(7)); // true --- Truthy value
console.log(Boolean(-7)); // true
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false -- Falsy value
console.log(Boolean(undefined)); // false -- Falsy value
console.log(Boolean("sanjeev")); // true
console.log(Boolean(!"sanjeev")); // false

let y = Number("sanjeev 123");
console.log(y); // NaN

let z = parseInt("sanjeev 123");
console.log(z); // NaN

let b = parseInt("123 sanjeev");
console.log(b); // 123
