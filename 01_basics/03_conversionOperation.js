

let score = null
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN   (NaN -> not a number)
// null => 0
// undefined => NaN
// true => 1
// false => 0
// "hossain" => NaN



let isLoggedIn = "sayed"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//   1 => true ,   0 => false
// "" => false ,  "sayed" => true


let someNumber = 56 
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));

// 56 => string


// ******************************Operations*******************************

let value = 4
let negativeValue = -value
console.log(negativeValue);  //  O/P -> -4

let str1 = "Hello"
let str2 = " Soul"
let str3 = str1 + str2
console.log(str3);   // O/P -> Hello Soul


console.log("1" + 2);  // if starting value is string then rest of the numbers are string
console.log(1 + "2");  // O/P -> 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32


console.log(true); // O/P -> true
console.log(+true); // O/P -> 1
// console.log(true+);   Not allowed
console.log(false);  // O/P -> false
console.log(+""); // O/P -> 0



let gameCounter = 200
gameCounter++;
console.log(gameCounter);



