const user = {
    username : "pc",
    price : 99,

    welcomeMessage: function() {
      console.log(`${this.username} , welcome to website `);
      console.log(this);
    }

}
 
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);



// function cup =function(){
//   let username = "pc"
//   console.log(this.username);
// }

//cup ()


const cup = () => {
  let username = "pc"
//  console.log(this);
}

// cup()


//  const addTwo =  (num1, num2) => { 
//   return (num1+ num2)

//  }

// const addTwo =  (num1, num2) =>  (num1+ num2)
const addTwo =  (num1, num2) => ({ username:"pc"})
 
 
// console.log(addTwo(3,4))

 const myArray = [2,3,5]
 myArray.forEach(() => {} )