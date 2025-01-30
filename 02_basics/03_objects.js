// singleton
// Object.create


// object literals

const mySymbol = Symbol("key1");

const jsUser = {
    name: "Sayed",
    "full Name": "Sayed Hossain",
    [mySymbol]: "myKey1", // square bracket for symbol || imp. for interview
    age: 23,
    location: "Kolkata",
    email: "soulf032@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email); // this is not a good method to access the object's value
console.log(jsUser["email"]); // it is a good method.
console.log(jsUser["full Name"]); // it is also a good method.

console.log(jsUser[mySymbol]); 

// if we want to freeze all value in object then use.
// Object.freeze(jsUser) -> jsUser is a Object parameter, which u define

// ex: -
jsUser.email = "testing@gmail.com"; // email value is changed

//Object.freeze(jsUser); // freezing the Object
jsUser.email = "soul@gmail.com";
console.log(jsUser.email); // now value won't change bcz of freeze.

console.log(jsUser);


// Now adding a function in Object.
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //same object ko refer krne ke liye "this" ka use krte hai
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());