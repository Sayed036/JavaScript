// Premitive  (call by value  -> data copied then transfer to the function.)
// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const AnotherScore = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail;  // u can give undefined parameter, but this is also undefined;

const id  = Symbol('123')  // return type symbol
const anotherId = Symbol('123')  // both value(123) are different;
console.log(id === anotherId);  //O/P -> false

const BigNumber = 153264865935896n; // example of BigInt




// Non-premitive (call by Reference   -> original address transfer to the function.)
// Array, Objects, Functions.

const Heros = ["shaktiman", "Nagraj", "Doga"]  // Object example
let myObj = {
    name: "Sayed",
    age: 23,

} // Array return type is Object;


const myFunction = function() // Function return type is Function
{
    console.log("Hello World!");
    
} 

console.log(typeof score);  // number
console.log(typeof outsideTemp);  // object
console.log(typeof id);   // symbol
console.log(typeof BigNumber);  // bigint
console.log(typeof Heros);  // object
console.log(typeof myFunction);  // function
