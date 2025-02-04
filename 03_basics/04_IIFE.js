// Immediately Invoked Function Expression

(  function chai() {
    // NAMED IIFE
    console.log(`DB CONNECTED`);
} )();


( (name) => {
    // SIMPLE IIFE
    console.log(`DB CONNECTED TO ${name}`);
    
}  )('SERVER')