// ++++++++++++++++++++++++++++++  Numbers  ++++++++++++++++++++++++++++++++++++++++++

const score = 100;
console.log(score);

const balance = new Number(400);
console.log(balance); // O/P -> [Number: 400]


// toString()
console.log(balance.toString());
console.log(typeof balance); // 

// toFixed()
console.log(balance.toFixed(2)); // O/P -> 400.00


// toPrecision()
const anotherNumber = 23.98642;
console.log(anotherNumber.toPrecision(3));


const hundreds = 1000000; // this is 10 lakh
console.log(hundreds.toLocaleString()); // O/P -> 1,000,000  but this is US-format
console.log(hundreds.toLocaleString('en-IN')); // O/P -> 10,00,000  indian format :)



// ++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-6)); // O/P -> 6
console.log(Math.round(4.6)); // O/P -> 5
console.log(Math.ceil(4.8)); // O/P -> 5
console.log(Math.floor(4.9)); // O/P -> 4

console.log(Math.min(2,6,3,1,6,8)); // 1
console.log(Math.max(2,6,3,1,6,8)); // 8


// Math.random() -> the values always between 0 to 1 
console.log(Math.random());