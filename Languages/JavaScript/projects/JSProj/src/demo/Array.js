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
console.log(data2.push(2)); // 5 --> i) add an element to ending & returns length of array after pushing an element
console.log(data2); // [ 5, 7, 8, 9, 2 ]
console.log(data2.pop()); // 2
console.log(data2); // [ 5, 7, 8, 9 ]
console.log(data2.shift()); // 5 -- remove element from beginning
console.log(data2); // [ 7, 8, 9 ]
console.log(data2.unshift(2)); // 4 -- add an element to beginning & returns length of array after adding an element
console.log(data2); // [ 2, 7, 8, 9 ]
console.log(data2.splice(1,2)); // [ 7, 8 ]
