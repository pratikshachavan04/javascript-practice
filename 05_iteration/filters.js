
// const language = ["cpp","java","python","ruby"]

// const values = language.forEach ( (item)  => {

//     console.log(item);
//     return item

// })

// console.log(values);

// for each never return any value 


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myNums.filter( (num) => { 
//     return num > 4              // if we use scope then add return then apply condition 
                               
// })

//  const newNums = []

//  myNums.forEach( ( num ) => {
//      if (num > 4) {
//         newNums.push(num)
//      }

//  })
//  console.log(newNums);

const cinema  = [
    {Audience :`Hindi`, genre: 'comedy', growaudience : 1965},
    {Audience : `English`, genre:`sci-fi`, growaudience: 1999},
    {Audience : `Marathi`, genre: `Storytelling`, growaudience: 2002},
    {Audience : `Telugu`, genre: `storytelling`, growaudience :2008},
    {Audience : `Tamil`, genre: `massy`, growaudience :2004},
    {Audience : `Malyalam`,genre:`realistic`,growaudience :2010},
    {Audience : `Gujrati`, genre: `comedy`, growaudience : 2000}
];

let userChoice = cinema.filter( (cn) =>cn.genre ===`comedy` && cn.growaudience >1950 )
userChoice = cinema.filter ( (cn) =>{
     return  cn.growaudience < 2000 && cn.genre ===`sci-fi` } )
console.log(userChoice);

