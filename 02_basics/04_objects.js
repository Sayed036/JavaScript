//const tinderUser = new Object() // singletone object hai.

const tiktokUser = {}  // non-singletone object hai.

tiktokUser.id = "235ck";
tiktokUser.name = "soul98";
tiktokUser.isLoggedin = false;
 
//console.log(tiktokUser);

const regural_user = {
    email: "some@gmail.com",
    full_name: {
        userfull_name: {
            firstName: "Sam",
            lastName: "Hossain",

        }
    }
}

console.log(regural_user.full_name.userfull_name);





const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1 , obj2};
// console.log(obj3);


// another method to combine
const obj3 = Object.assign({}, obj1, obj2);  // Object.assign(a,b,....n)
console.log(obj3);


// best method to combine using spread operator.
const obj4 = {...obj1, ...obj2};
console.log(obj4);


console.log(tiktokUser);
console.log(Object.keys(tiktokUser));  // to get keys of an object
console.log(Object.values(regural_user));  // to get values of an object

