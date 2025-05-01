let animal = {};
console.log(typeof animal); // object

let input = 'name';

let alien = {
  name : "Sanjeev",
  tech : "JS",
    laptop : {
    cpu : 'i7',
    ram : 4,
    brand : 'dell'
  }
};

console.log(alien);
console.log("name : " + alien.name);
console.log("tech : " + alien.tech);
console.log("name : " + alien["name"]);
// console.log("work exp : " + alien["work exp"]);
console.log("name : " + alien[input]);
console.log(alien.laptop.brand); // dell
console.log(alien.laptop.brand.length); // 4
console.log(alien.laptop.brand1?.length); // undefined

// delete alien.laptop; // delete laptop from alien
// console.log(alien); // { name: 'Sanjeev', tech: 'JS' }

//------For In Loop-----
for(let key in alien){
  console.log(key);
}
for(let key in alien){
  console.log(key, alien[key]);
}
for(let key in alien.laptop){
  console.log(key, alien.laptop[key]);
}

//----for...of loop : Used for iterable collection
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}