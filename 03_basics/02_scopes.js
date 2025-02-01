let a = 200;
var c = 12;

if(true)
{
    let a = 10;
    const b = 33;
    console.log("Value of INNER b :",b);
    c = 45;
}

console.log(a);
// console.log(b);  
console.log(c);




function one()
{
    const username = "soul";

    function two()
    {
        const website = "portfolio";
        console.log(username);
        
    }

    // console.log(website);

    two();

}

one();



if (true) 
{
    const username = "Firesoul786";
    if (username === "Firesoul786") 
    {
        const website = " eflip"
        console.log(username + website);
    }  

    // console.log(website);
    
}
// console.log(username);



//++++++++++++++++++++++++++++++++++ Interesting concept ++++++++++++++++++++


// case-1: when we cannot use variable to store the function.
// we are just using the function.
console.log(addOne(6))
function addOne(value)
{
    return value + 1;
}


// case-2: using the variable to store the function.  *****
// console.log(addTwo(6)); 
// const result = function addTwo(value)
// {
//     return value + 2;
// }

// NOTE : case 2 not valid bcz, addTwo function cannot detect while using variable.
