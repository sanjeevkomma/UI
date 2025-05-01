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