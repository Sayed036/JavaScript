// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);
// O/P -> both output is true


console.log(null > 0); // false   try to avoid this type of comparision
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); //  O/P -> true

console.log(undefined == 0);   // try to avoid this type of comparision
console.log(undefined >= 0);
console.log(undefined > 0);
// All O/P are false.



// This is Good.
// ===      (strict checking)
console.log("2" === 1);   // O/P -> false

// ===    -> it basically check the data types also.
