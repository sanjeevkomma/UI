let animal = {};
console.log(typeof animal); // object

let input = 'name';

let alien = {
  name : "Sanjeev",
  tech : "JS",
  'work exp' : 4,
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
console.log("work exp : " + alien["work exp"]);
console.log("name : " + alien[input]);
console.log(alien.laptop.brand); // dell
console.log(alien.laptop.brand.length); // 4
console.log(alien.laptop.brand1?.length); // undefined

delete alien.laptop; // delete laptop from alien
console.log(alien); // { name: 'Sanjeev', tech: 'JS', 'work exp': 4 }

//-----------
