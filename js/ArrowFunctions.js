// Converting Named functions to arrow functions
const addNumber = (num1, num2) => num1 + num2
console.log(addNumber(10, 20))

console.log('=================')

// Converting anonymous function to arrow function
let multiplyNumbers = (num1, num2) => num1 * num2

// Converting constructor functions to arrow functions
// Syntax wise this is possible
// BUT, DON'T DO THIS
// Not supports 'this', 'new' when using arrow functions
// let Student = (name, age, email) => { 
//     this.name = name
//     this.age = age
//     this.email = email
// }
// let student1 = new Student("Kamal", 38, "kamal@gmail.com")
// console.log(student1)

console.log('=================')

// Converting callback functions to arrow functions
let myFunction = callback => { 
    callback()
}
let secondFunction = () => { 
    console.log('Second Function')
}
myFunction(secondFunction)