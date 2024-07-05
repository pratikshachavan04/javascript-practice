
function sayMyName(){
    console.log("p");
    console.log("c");
}

// sayMyName()  

// function addTwoNumber(number1, number2){

//     console.log(number1 + number2);
// }
//   addTwoNumber(3,4)          //7 
//   addTwoNumber(3,"4")       //34........ 

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // return result
    //console.log("pc");       // after return the value console.log doesn't work   
}
const result = addTwoNumber(3,5)
// console.log("Result:", result);

function loginUserMessage(username){
    return `${username}just logged in`
}

//console.log(loginUserMessage("pc"))

function calculateCartPrice(val1,val2,  ...num1){
    return num1
}

// console.log(calculateCartPrice(200,100,500,800,1000))

const user = {
    username: "PC",
    price: 1000
}

function handleObject(anyobject){

    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

handleObject({

    username :"pratiksha",
    price : 499
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray));


const myNewArray1 =[11,22,55,66]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray1));