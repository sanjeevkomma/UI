console.log(5 > 6); // false

let x = 7;
let y = 6;
let data = x >=  y;
console.log(data); // true

let str1 = "Pen";
let str2 = "Book";
let result = str1 > str2;
console.log(result); // true -- ASCII values


let str3 = "2";
let z = 1;
let result2 = str3 > z ;
console.log(result2); // true

let str4 = "2";
let a = 4;
let result3 = str4 > a ;
console.log(result3); // false

let c = 3;
let d = 3;
let result4 = c == d ;
console.log(result4); // true

let e = "6";
let f = 6;
let result5 = e == f ;
console.log(result5); // true -- technically it should return 'false' since data type are string & number

let g = "6";
let h = 6;
let result6 = g === h ;
console.log(result6); // false

let k = '';
let l = false;
let result7 = k === l ;
console.log(result7); // false
