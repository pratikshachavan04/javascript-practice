// for each loop 

const language = ["cpp","java","python","ruby"]

// language.forEach( function (val) {
//     console.log(val);

// }  )

// arrowfunction

// language.forEach( (val) => {
//     console.log(val);
// }  )

// printMe 

// function printMe(item){
//     console.log(item);
// }

// language.forEach(printMe)

// language.forEach ( (val, index, arr ) => {
//     console.log(val, index, arr);

// }   )


const myCode = [
    {
        languageName : "javascript",
        languagFileName :"js",
        
    },
    {
        languageName : "java",
        languagFileName :"java",
        
    },
    {
        languageName : "python",
        languagFileName :"py"
        
    }
]

myCode.forEach( (val) => {
    console.log(val.languagFileName);

}  )

