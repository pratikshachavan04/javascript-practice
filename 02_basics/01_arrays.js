// array 

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["spiderman", "thor"] 

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[2]);

//Array methods

// myArr.push(6)
// myArr.push(10)
// myArr.pop()

// myArr.unshift(5)
// myArr.shift()

//console.log(myArr.includes(2));
//console.log(myArr.indexOf(1));


const newArr =  myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,4)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);