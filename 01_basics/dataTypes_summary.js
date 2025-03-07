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

console.log("score return_type : ",typeof score);  // number
console.log("outsideTemp return_type: ",typeof outsideTemp);  // object
console.log("id return_type: ",typeof id);   // symbol
console.log("BigNumber return_type: ",typeof BigNumber);  // bigint
console.log("Heros return_type: ",typeof Heros);  // object
console.log("myFunction return_type: ",typeof myFunction);  // function



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive);   Heap (Non-premitive);

let myYtName = "HackWithSayed"; // Stack example (copy value)
let Another_YtName = myYtName;
myYtName = "Hossain_Hacking";

console.log(myYtName); // O/P -> Hossain_Hacking
console.log(Another_YtName);  // O/P -> HackWithSayed


let userOne = { // Heap example (Original reference)
    email: "soulf032@gmail.com",
    upi: "soul@ybl",

}

let userTwo = userOne;
userTwo.email = "user@google.com";

console.log(userOne.email);
console.log(userTwo.email); // both O/P are user@google.com


