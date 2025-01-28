// Dates

let myDates = new Date()
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
console.log(myDates.toLocaleString());

console.log(typeof myDates);


let myCreated_Dates = new Date(2025, 6, 23);
console.log(myCreated_Dates.toLocaleString());

myCreated_Dates = new Date("2-10-2002");
console.log(myCreated_Dates.toLocaleString());


let timeStamp = Date.now();
console.log(timeStamp); // value comes in mili-second


// mili-second to second -> just devide by 1000
console.log(Math.floor(Date.now()/1000)); // now value comes in second


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());


let current_dates = newDate.toLocaleString('default', {
    weekday: "long"
}) 
console.log(current_dates);
