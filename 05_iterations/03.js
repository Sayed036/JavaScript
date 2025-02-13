// for of

const Arr = ['BATMAN', 'SUPERMAN', 'IRONMAN']

for (const num of Arr) {
    console.log(num);
    
}

// MAP -> it follows the Orders and contains Unique values

const map = new Map()

map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATES OF AMERICA');
map.set('FR', 'FRANCE');
map.set('GM', 'GERMANY');
map.set('BH', 'BHUTAN');

console.log(map);

// for of loop on map
for (const [key, value] of map) {
    console.log(key, "-> ", value);
}


// const myObject = {
//     'game1': 'Spiderman',
//     'game2': 'GTA-5',
//     'game3': 'BGMI',
// }

// for (const [key] of myObject) {
//     console.log(key);
    
// }  NOTE -> for-of loop doesn't work on Object



// for-in loop
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}
for (const key in myObject) {
    console.log(myObject[key]);
}



// for-in loop apply on array.
const programming = ['Js', 'C++', 'Python', 'Ruby'];
for (const key in programming) {
    console.log(programming[key]);   
}