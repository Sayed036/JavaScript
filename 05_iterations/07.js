const myNUms = [1,2,3]


// reduce() -> it is a call back functn, parameter is accumulator and current value
const myTotal = myNUms.reduce( (acc, curr_val) => {
    console.log(`acc ${acc} and current value : ${curr_val}`);
    return acc + curr_val;
    
}, 0)  // here 0 means, acc value start with 0
console.log(myTotal);



// Another smart way to write this above code
const TOTAL = myNUms.reduce( (acc, currval) => (acc + currval), 0 )
console.log(TOTAL);



// Real example of reduce()
const Shopping_cart = [
    {
        itemname: "Js course",   // let's suppose scope name is "item"
        price: 2999
    },
    {
        itemname: "Py course",
        price: 999
    },
    {
        itemname: "Mobile dev course",
        price: 4999
    },
    {
        itemname: "Data science course",
        price: 12999
    },
]


// Here below "item" word refer to an scope of Shopping_cart
const TOTAL_CartPrice = Shopping_cart.reduce( (acc, item) => (acc + item.price) , 0)
console.log(TOTAL_CartPrice);
