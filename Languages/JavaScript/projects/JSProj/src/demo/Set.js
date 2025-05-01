// Set is collection of unique values and maintains insertion order
let nums = new Set("bookkeeper");
console.log(nums); // Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }

let nums2 = new Set();
nums2.add(3);
nums2.add(4);
nums2.add(5);
nums2.add(3);
nums2.add(33);
nums2.add("sanjeev");
nums2.add(true);
nums2.add("sanav");
console.log(nums2); // Set(7) { 3, 4, 5, 33, 'sanjeev', true, 'sanav' }

nums2.delete(5); // delete 5 from set

nums2.forEach(value => {
  console.log(value);
});
/* output :
3
4
33
'sanjeev'
true
'sanav'
*/

console.log(nums2.has(3)); // true