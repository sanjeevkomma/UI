
// in javascript, function is an object 

let userName = "John";

function greet(uName){
  console.log("userName : " + userName); // John -- Global variable
  let num = 5; // local variable
  console.log(num); // 5
  return `Hello ${uName}`;
}

let result = greet(userName);
console.log(result); // Hello John

//---Function expression
// Function is an Object in Javascript
let add = function(num1,num2){
  return num1 + num2;
};
let result2 = add(5,6);
console.log(result2); // 11
console.log(add); // [Function: add]

let sum = add;
let result3 = sum(3,4);
console.log(result3); // 7
console.log(sum); // [Function: add]


function add1(num1,num2,num3){
  return num1 + num2 + num3;
}
let result4 = add1(23,4,2);
console.log(result4); // 29

let result5 = add1(23,4);
console.log(result5); // NaN

function add2(num1,num2,num3=1){
  return num1 + num2 + num3;
}
let result6 = add2(23,4);
console.log(result6); // 28

let result7 = add2(23,4, 5);
console.log(result7); // 32

// Arrow function
let greet4 = (user) => {
  console.log("Hello World -- Arrow Function " + user);
  return 1;
}
console.log(greet4("my name"));

let add6 = (num1,num2) => num1 + num2;
console.log(add6(3,4)); // 7
