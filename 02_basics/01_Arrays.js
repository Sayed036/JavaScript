// Arrays 
// NOTE -> Array is a Referece type.
const myArr = [1,2,3,4,5,6];
const Heroes = ["Ironman", "Tony_Stark", "Thor"];

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[1]);
console.log(Heroes[2]);



// Array Methods

// push()
console.log(myArr.length); // to determine the length of array
// Note -> Length is not a function.

myArr.push(7);
console.log(myArr);

myArr.push(9,10,11); // we can also push the multiple element at the same time
console.log(myArr);



// pop() -> to remove the last element from the array.
myArr2.pop();
console.log(myArr2);


// unshift() and shift()
myArr.unshift(0); // to insert element in first place of array.
// we can also insert the multiple elements.
console.log(myArr);
myArr.shift() // to remove an element from the 1st place.


// includes() -> to check the elemnt present or not in the form of boolean
console.log(myArr.includes(9)); // true
console.log(myArr.includes(21)); // false


// indexOf() -> to check the elemnt present at which index.
console.log(myArr.indexOf(5)); // 4th indexof given array.


// join() -> it bind the array and convert into string data type
const newArray = myArr.join();
console.log(newArray); // O/P ->  1,2,3,4,5,6,7,8,9,10,11 [this is a string]
console.log(typeof newArray); // string



// slice() -> it make a copy of an array then excute
// splice() -> it modify the original value of an array then excute.
console.log("A ", myArr);
const myn1 = myArr.slice(1,3); // [ )  -> not include the last index.
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3); 
console.log("C ", myArr); // [1,5,6,7,9,10,11]   it remove the 2,3,4 element using splice.

console.log(myn2); // [2,3,4]
