// Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toString());

//console.log(typeof myDate);  // date is object type in js

// let myCreatedDate = new Date(2024,0,25)
// let myCreatedDate = new Date(2024, 0, 25, 05, 30)
//let myCreatedDate = new Date ("2024-01-25")

let myCreatedDate = new Date ("01-25-2024")

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log (Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

});