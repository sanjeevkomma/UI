let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr.length); // 5
console.log(arr[0]); // 1 -- index based
console.log(arr[7]); // undefined

let values = new Array();
console.log(values); // []

let values2 = [];
console.log(values2); // []
values2.push(12);
console.log(values2); // [ 12 ]

let names = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
names.push("abc");
names[6] = "xyz";
console.log(names);

let data = ["sanjeev", "sanav", 5, 6,
  {tech : 'JS'},
  function() { console.log("Hello World SS");} ];
console.log(data);
console.log(data[0]); // sanjeev
console.log(data[4]); // { tech: 'JS' }
console.log(data[5]());// Hello World SS


let data2 = [5,7,8,9];
console.log(data2.push(2)); // 5 (length of an array after pushing) --> i) add an element to ending & returns length of array after pushing an element
console.log(data2); // [ 5, 7, 8, 9, 2 ]
console.log(data2.pop()); // 2 -- -- removes an element from the ending
console.log(data2); // [ 5, 7, 8, 9 ]
console.log(data2.shift()); // 5 -- removes an element from the beginning
console.log(data2); // [ 7, 8, 9 ]
console.log(data2.unshift(2)); // 4 -- add an element to beginning and returns length of an array after adding an element
console.log(data2); // [ 2, 7, 8, 9 ]
console.log(data2.splice(1,2)); // removes [ 7, 8 ] -- count 2,  starting from index 1
console.log(data2); // [ 2, 9 ]
console.log(data2.splice(0,2,14,15)); // replaces [ 2, 9 ] with [ 14, 15 ] -- count 2, starting from index 0
console.log(data2); // [ 14, 15 ]
console.log(data2.push(45,46,47)); // 5 (length of an array after pushing)
console.log(data2); // [ 14, 15, 45, 46, 47 ]

// Destructuring an array
let nums = [19, 29, 35, 42, 65];
console.log(nums); // [ 19, 29, 35, 42, 65 ]
let [a, b, , d, e] = nums;
console.log(a); // 19
console.log(d); // 42

// Swapping elements
let x = 23;
let y = 88;
[x,y] = [y,x];
console.log(x,y); // 88 23

// Swapping elements in an array
let arr1 = [31, 52, 83, 34, 45];
[arr1[0], arr1[1]] = [arr1[1], arr1[0]];
console.log(arr1); // [ 52, 31, 83, 34, 45 ]

let words = "My name is Sanjeev".split(' ');
let [g,h,,j] = words;
console.log(g,h); // My name

let tokens = "My tech stack is Javascript Java".split(' ');
let [k,l,,,...m] = tokens;
console.log(m); // [ 'Javascript', 'Java' ]

// Array forEach Method
let arr2 = [12,52];
arr2.forEach( (n, index,arr2) => {
  console.log(n,index,arr2);
});
/* output :
12 0 [ 12, 52 ]
52 1 [ 12, 52 ]
*/

// Array filter Method
let arr6 = [12,52,34,65,78];
arr6.filter( (n, index,arr6) => {
  return n > 50;
}).forEach( (n, index,arr7) => {console.log(n);}); // [ 52, 65, 78 ]


// Array map Method
let arr3 = [12,52];
arr3.map( (n, index,arr3) => {
  return n * 2;
}).forEach( (n, index,arr3) => {console.log(n);}); // [ 24, 104 ]

// Array reduce Method
let arr5 = [12,52,34,65,78];
let sum = arr5.filter(n => n > 50)
              .map(n => n * 2)
              .reduce((a,b) => a + b);
console.log(sum); // 390