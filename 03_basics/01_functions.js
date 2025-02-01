// function sayName()
// {
//     console.log("Hey! Sayed");
// }
// sayName();


// function addTwoNumbers(number1, number2)
// {
//     let result = number1 + number2;
//     return result;
// }
// const answer = addTwoNumbers(2,5);
// console.log(answer);



// function userLoginMessage(username)
// {
//     if(username === undefined)
//     {
//         console.log("Please enter user name !!");
//         return;
//     }
//     return `${username}, just logged in`;
    
// }
// console.log(userLoginMessage("Eno"));




// using spread/rest operator, we can store n times money/value in the basket.
// it returns all money/value in an array.
function cartPrice(...num1)
{
    return num1;
}
console.log(cartPrice(20,300,500,600));



// Another case for interview
function cart_price(val1, val2, ...num1)
{
    return num1;
}
console.log(cart_price(20,300,500,600));
// Here 20 and 300 stored in val1 and val2, and rest of the values stored into num1
