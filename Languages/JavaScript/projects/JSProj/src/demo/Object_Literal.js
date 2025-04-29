let animal = {};
console.log(typeof animal); // object

let input = 'name';

let alien = {
  name : "Sanjeev",
  tech : "JS",
  'work exp' : 4
};

console.log(alien);
console.log("name : " + alien.name);
console.log("tech : " + alien.tech);
console.log("name : " + alien["name"]);
console.log("work exp : " + alien["work exp"]);
console.log("name : " + alien[input]);
