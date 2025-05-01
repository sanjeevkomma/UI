// Map is class in Javascript
// Map is a collection of key value pairs
let map = new Map();

map.set("sanjeev","Java");
map.set("sanav","python");
map.set("mou","javascript");
map.set("sanjeev","Blockchain");

console.log(map.keys); // [Function: keys]
console.log(map.values); // [Function: values]

console.log(map.has("sanjeev")); // true
console.log(map.get("sanjeev")); // Blockchain

// for..of loop
for(let [key,value] of map){
  console.log(key, " : ", value);
}
/* output :
sanjeev  :  Java
sanav  :  python
mou  :  javascript
*/

map.forEach((value, key) => {
  console.log(key, " : ", value);
});
/* output :
sanjeev  :  Java
sanav  :  python
mou  :  javascript
*/