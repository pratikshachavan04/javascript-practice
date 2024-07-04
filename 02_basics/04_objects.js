//const instaUser = new Object()         declared singleton object
const instaUser = { }

instaUser.id = "1123"
instaUser.name = "pc"
instaUser.isLoggedIn = false

//console.log(instaUser);

const webUser = {
    email :"pc@gmail.com",
    fullname : {
        userfullname: {
            firstname: "pratiksha",
            lastname : "chavan"
        }

    }
}

// console.log(webUser.fullname.userfullname.firstname);

const obj1 = {1: "aa", 2:"bb"}
const obj2 = {3:"cc", 4:"dd"}
const obj3 = {5:"ee", 6:"ff"}

// const obj4 = {obj1,  obj2 , obj3 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

//we'll use spread operator mostly 
const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);

const user = [
    {
    id : 1,
    email: user("p@yahoo.com")
},
   {
    id :2,
    email: user("p@yaahoo.com")
   },

]


console.log(Object.keys(webUser));