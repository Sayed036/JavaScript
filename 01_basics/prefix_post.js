// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`);
// // O/P -> x: 4, y:3


// let a = 3
// const b = ++a;
// console.log(`a:${a}, b:${b}`);



let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);


let x2 = 3n;  // x2 is a BigInt
const y2 = x2;  // y2 gets the value of x2
x2++;  // Post-increment x2
console.log(`x2:${x2}, y2:${y2}`); // This will print as numbers due to JavaScript behavior

// To force the output to show BigInt:
console.log(`x2:${x2.toString()}n, y2:${y2.toString()}n`);


