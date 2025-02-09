// if

const isUserLoggedIn = true

if (2 === "2") {
    console.log("executed");
}

// falsy values : 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// True values:
//  "0", " ", 'false', [], {}, function(){}, 




// Nullish Coalescing Operator(??) : null, undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);


// Ternery Operator
// Condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

