for (let i = 1; i <= 2; i++) {
  console.log("Hi " + i);
  for (let j = 1; j <= 2; j++) {
    console.log("Hello",j);
  }
}

// output :
/*
Hi 1
Hello 1
Hello 2
Hi 2
Hello 1
Hello 2
*/

//----for...of loop : Used for iterable collection
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
/* output :
apple
banana
cherry
*/





