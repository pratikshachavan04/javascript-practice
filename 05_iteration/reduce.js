const myNums = [1,2,3,4]


                                // [reduce with function only ]

// const myTotal = myNums.reduce( function ( acc , currval) {
//     console.log(`acc:${acc}, currval:${currval}`);

//     return acc + currval 
// }, 0)




                                             // [reduce with arrow function]

const myTotal = myNums.reduce( (accu, currval)  => accu + currval, 0 )
// console.log(myTotal);



const shoppingCart = [
    {
        itemName : "sunscreen" ,
        price : 499
    },
    {
        itemName : "Hat" ,
        price : 1000
    },
    {
        itemName : "Sunglasses" ,
        price : 1499
    },
    {
        itemName : "shots" ,
        price : 499
    },
    {
        itemName : "T-shirt" ,
        price : 599
    },

]

const myCartTotal = shoppingCart.reduce( (acc, item )  => acc + item.price , 0 )
console.log(myCartTotal)
;