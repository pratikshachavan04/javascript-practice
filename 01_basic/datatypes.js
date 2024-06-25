//primitive 

// 7 types : string , Number, Boolean , null , undefined , symbol ,Big int
 
const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

//console.log (id === anotherId);

// const bigNumber  = 4545454545454545n



//Reference (Non Ptimitive)

// Array, Objects, Functions

const heros = ["Hatim","Vikraal"]; // array

letmyObj = {                      //object
    name: "pratiksha",
    age: 26,
}

/*
const myFunction =function(){
    //console.log("Hello world");   // object
}

console.log (typeof heros);        // array
*/

//-----------------------------------------------------------------------------------------------------

//Stack (Premitive), Heap (Non-Premitive)

let myliabraryname = "pratiksha"


let anothername = myliabraryname
anothername = "A11DESK"


console.log(myliabraryname);
console.log(anothername);


let user1 = {
    email: "user@gmail.com",
    upiId : "okaxixuser"
}

let user2 = user1

user2.email = "pratiksha@gmail.com"

console.log(user1.email);
console.log(user2.email);