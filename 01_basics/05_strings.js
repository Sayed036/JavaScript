const name = "Sayed ";
const repoCount = 6;
//console.log(name + repoCount + " value"); // concatenate, this is not a good way

console.log(`Hi my name is : ${name} and my repo count is : ${repoCount}`);  // good way :)


// to define string
const gameName = new String("Hossain"); // new -> is a object
console.log(gameName); // O/P -> [String: 'Hossain']
console.log(typeof gameName); // String is a Object

console.log(gameName[2]); // O/P- > s
console.log(gameName.__proto__); // __proto__ => {} (this means object)
console.log(gameName.length); // O/P -> 7
console.log(gameName.toUpperCase()); // O/P -> HOSSAIN
console.log(gameName.charAt(4)); // O/P -> a
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4); 
console.log(newString); // O/P -> Hoss

const anotherString = gameName.slice(-5, 5);  // we can use -ve index in slice function
console.log(anotherString); // O/P -> ssa


const newStringOne = "    Soul   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() -> it removes the spaces from both end

const url = "https://sayed036/hossain%20soul.com";
console.log(url.replace('%20', '-'));  // https://sayed036/hossain-soul.com   || %20 is replaced by -



// includes() -> check the given string is available or not in the form of [true or false]
console.log(url.includes('sayed')); // O/P -> true
console.log(url.includes('firesoul')); // O/P -> false



// split() -> it convert the string to array.
const myname = "fire-soul-good";
console.log(myname.split('-')); // O/P -> [ 'fire', 'soul', 'good' ]

