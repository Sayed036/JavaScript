// creation of Promises
const promiseOne = new Promise( function(resolve, reject){
    // Do an Async Task
    // Async task Ex -> DB calls, cryptography, network calls, 

    setTimeout(() => {
        console.log("Async task is complete");

        // to connect the .then() with resolve, we need to call the "resolve()"" method
        resolve();
    }, 1000);
})

// now consuming the promise.
// .then() -> it is a call back function.
promiseOne.then( function() {       // .then() is directly connected to the "resolve"
    console.log("promise consumed");
} )    




new Promise( function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2 complete")

        resolve()
    }, 1000);
} ).then(function(){
    console.log("Async 2 resolved...")
})



// passing the parameter/data using resolve() method.
const promiseThree = new Promise( function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "Sayed036", email: "hossainsayed036@gmail.com"})
    }, 1000);
} )

promiseThree.then( function(userdata){
    console.log(userdata);
} )




// promise four
const promiseFour = new Promise( function(resolve, reject){
    let error = false;
    if(error){
        resolve({username: "f1r350ul", password: "123"})
    }
    else{
        reject("ERROR: Somthing went wrong !!")
    }
} )

promiseFour.then( function(userdata){
    console.log(userdata);
    return userdata.username;
} ).then( (username) =>  {
    console.log(username);
}).catch( (error) => {
    console.log(error);
}).finally( () => console.log("Promise is either resolved or rejected"))
 // .finally() -> it always execute, we can say this is type of default.

 