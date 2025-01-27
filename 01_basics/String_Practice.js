const Sentence = new String("Hi How are you? I am fine.");
let index = 5;

// at()  -> it takes an integer value(+ve/-ve) and returns a new string
// NOTE : if index go beyond of string then it returns undefined.
console.log(`An index of ${index} returns the character ${Sentence.at(index)}`);


// charAt() -> it only takes +ve value and returns a new string
// NOTE : if index go beyond of string then it returns nothing.
index = 3;
console.log(`An index of ${index} returns the character ${Sentence.charAt(index)}`);


// charCodeAt() -> The charCodeAt() method of String values returns 
// an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
index = 4;
console.log(`Character code of ${Sentence.charCodeAt(index)} equal to ${Sentence.charAt(index)}`);


// codePointAt() -> return the ASCII value or code of a symbol.
const icons = '☃★♲';
const words = "ABC"
console.log(icons.codePointAt(1)); // O/P -> 9733
console.log(words.codePointAt(1)); // O/P- > 66


// concat() -> add two or more string and return new string.
const str1 = "soul";
const str2 = "bhai";
const str3 = "kaise ho?";
console.log(str1.concat(' ', str2, ' ', str3)); // O/P -> soul bhai kaise ho?



// endsWith() -> The endsWith() method of String values determines whether a string ends with the characters of this string, 
// returning true or false as appropriate.
console.log(Sentence.endsWith("fine.")); // true
console.log(Sentence.endsWith("hello")); // false


// The includes() method of String values performs a case-sensitive search to 
// determine whether a given string may be found within this string, returning true or false as appropriate.
console.log(Sentence.includes("How")); // true
console.log(Sentence.includes("hey")); // false


// repeat() 
const mood = "happy! ";
console.log("I am ", mood.repeat(3));  // I am happy! happy! happy!
console.log(`I feel ${mood.repeat(3)}`); //I feel happy! happy! happy!