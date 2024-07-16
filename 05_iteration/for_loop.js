// for

// for (let i = 0; i < array.length; j++) {
//     const element = array[j];
    
// }



for (let i = 1; i <= 5; i ++ ) {
    const element = i;
    if (element == 5){
       // console.log("5 is best element");
    }
// console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
     //console.log(`outer loop${i}`) ;

     for (let j = 1; j <= 5; j++) {
    // console.log(`inner loop ${j} and outer loop ${i}`);
    //console.log(`${i} * ${j} = ${i*j}`)    
        }
    }
 
let newArry = ["ironman","superman","flash"]
// console.log(newArry.length);
    for (let i = 0; i < newArry.length; i++) {
        const element = newArry[i];
        // console.log(element);
    }

    // break and continue 

    for (let index = 1; index <= 20; index++) {
        if(index == 5){
   //         console.log(`detectd 5`);
          break
        }
   // console.log(`value of is ${index}`);
        
    }

    for (let index = 1; index <= 20; index++) {
        if(index == 5){
            console.log(`detectd 5`);
            break
        }
    console.log(`value of is ${index}`);
        
    }