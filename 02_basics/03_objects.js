// singleton 

// object literals
//Object.create   //...........constructor method litersl through 


const mySym = Symbol ("key11")
const JsUser = {
    //mySym : "key11", //  not a right method instant use 
    [mySym]: "key11",
    name : "pc",
    "full Name" : "P G C",
    email : "pc@gmail.com" ,
    age :18,
    isloggedin : true,
    location : "mumbai" ,
    lastLoginDays : ["monday","tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "chavan@gmail.com" // to change  email override with =
//Object.freeze(JsUser)  // to freeze 
JsUser.email = "chavan@YAHOOH.com" 
//console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello user");
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
