// for of 

// [" ", " ", " "]
// [{}, {}, {}]

//  const arr = [ 1,2,3,4,5]

//  for (const val of arr) {
//     console.log(val);
//  }

//  const greeting = "hello pc"
// for (const greet of greeting ) {

//    console.log(`each char is ${greet}`);
// }

// const greetings = "welcome"
// for (const greett of greetings){
//    console.log(`very warm ${greett}`);
// }



// Maps 

const map  = new Map()
map.set('IN', "India")
map.set('USA', "United Stated of  America")
map.set('UK', "United Kingdom ")
// console.log(map);                          // for off loop 


for (const [key,value] of map) {
   console.log(key, ':-', value);
}


const myObject = {
   'froot1': 'apple',
   'froot2': 'cherry'
}


// for off loop with object doesnt work 
// for (const [key, value] of myObject) {
//    console.log(key, ':-', value);
// }
