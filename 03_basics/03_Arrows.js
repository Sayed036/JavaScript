const user = {
    username: "Muskan",
    price: 999,

    welcomeMessege: function() {
        console.log(`${this.username}, Welcome to website.`);
        console.log(this);
    }
}
// user.username = "Sayed"
user.welcomeMessege();

// console.log(this); // it gives empty object, bcz there's no this reference for it


// // NOTE : -> Browser ke ander "global" variable "Window" hota hai.


// function chai()
// {
//     let username = "SAYED";
//     console.log(this.username);
    
// } // O/P -> undefined
// chai();

// const chai = function ()
// {
//     let username = "SAYED";
//     console.log(this.username);
    
// } // O/P -> undefined
// chai();



// Arrow function.
// const chai =  () => {
//     let username = "SAYED";
//     console.log(this);
    
// } // O/P -> undefined
// chai();


// Proper Arrow function
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(2,6));


// Another way to define arrow function.
const addthree = (num1, num2, num3) => (num1 + num2 + num3);

// NOTE : In above line, no need to specify the "return" statement
// and it wrap into parenthesis(), if it is in curly braces it shows error.