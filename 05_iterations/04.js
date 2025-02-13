// for-each

const coding = ['Java', 'Javascript', 'C++', 'Python']
coding.forEach( function (val) {
    console.log(val);
} )
// NOTE :-> for-each is a call back function. where we pass the 
// the function in this.


// we can also pass the separate function in this.
function greet(item) {
    console.log(item);
}
coding.forEach(greet); // here we pass the function reference, not excuting



// Array function in for-each
coding.forEach( (value, index, array) => {
    console.log(value, index, array);  
})




// Let suppose there is data in the server like below example.
// and we want to access this, then we apply for-each loop.
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    },

    {
        languageName: "C-language",
        languageFileName: "c"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )