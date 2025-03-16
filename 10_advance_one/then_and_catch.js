let p1 = new Promise( (resolve, reject) => {
    console.log("Promise1 is Pending...");
    
    setTimeout( () => {
        console.log("Welcome Sir")
        resolve(true)
    }, 4000 )
} )

p1.then( (data) => {
    console.log(data)
} )



let p2 = new Promise( (resolve, reject) => {
    console.log("Promise2 is Pending...");
    
    setTimeout( () => {
        console.log("Rejected Error !!")
        reject()
    }, 4000 )
} )

p2.catch( () => {
    console.log("Some error Occured");
    
} )