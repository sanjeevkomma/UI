function greet(uName){
  return `Hello ${uName}`;
}

let userName = "John";
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
