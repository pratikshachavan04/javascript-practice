// if else 

// const rainyDay = false

// if (rainyDay){
//     console.log("step out")
// }
// else{
//     console.log("stay at home")
// }

// console.log("yes");

// const temperature = 40

// if (temperature === 455) {
//     console.log("less than 50");
// }else {
//     console.log("greater than 50");
// }
// console.log ("executed");

// SHORT HAND NOTATION
// const balance = 1000   //this type of code is implicit function ..its not a good practice of code 
// if (balance > 500) console.log("less than 1000"), console.log("test1");

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1100");
// }

const userLoggedIn = true 
const debit = true
const loggedInFromGoogle = true  
const  loggedInFromGmail = false 
const guestUser = false 
if (userLoggedIn && debit){
    console.log("allowed");
}

if (loggedInFromGoogle || loggedInFromGmail || guestUser ){
    console.log("allowed");
}