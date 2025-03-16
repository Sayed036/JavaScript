let p1 = new Promise( (resolve, reject) => {
    console.log("Promise is pending...")

    setTimeout( () => {
        console.log("Resolved after 2 seconds")
        resolve(1)
    }, 2000)   
} )

p1.then( (data) => {
    console.log(data)

    let p2 = new Promise( (resolve, reject) => {
        resolve("Promise 2")
    } )

    return p2

} ).then( (value) => {
    console.log("Done yrr");

    // reject();

} ).catch( (error)=>{
    console.log("Error Occured")
} )
