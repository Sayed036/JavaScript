const marvel_heroes = ["Ironman","Thor","Captain","Witch","Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes); // ye array ke andr array daal de rha hai, jo achhi chiz nahi hai.

// console.log(marvel_heroes);
// console.log(marvel_heroes[5][1]); // O/P -> Flash

// const All_heroes = marvel_heroes.concat(dc_heroes); // concat() -> it combine the 2 array and return a new array
// console.log(All_heroes);


// spread operator(...) -> elemnts are separated indivisually || it no more array.
const my_new_heroes = [...marvel_heroes, ...dc_heroes] // just use 3 dots
console.log(my_new_heroes);
console.log(typeof my_new_heroes);
// NOTE -> spread methoed is better than concat bcz, we can add 2 or more array at same time.


// in case of multiple array present into an array.
const another_array = [1,2,3,[6,2,8], 4,5,6,[2,3,6,[8,4,1,6]]];
// if we need the above array look like a single array then use flat() function.
const real_array = another_array.flat(Infinity) // infinity -> kitne depth tk check krna hai.
console.log(real_array);



console.log(Array.isArray("Sayed hossain")); // isArray() -> check passing argument is array or not
// above sayed hossain is false, bcz that is string.

// if we want to convert into array then use from()
console.log(Array.from("Sayed hossain")); // this is an array format
console.log(Array.from(53)); // O/P -> []  when it cannot convert into array then it returns an empty array
// above line is interesting for interview



// of() -> to combine values in an array
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); // O/P -> [100, 200, 300]


