// Type of functions

// 1. Named Functions
function addNumber(num1, num2) { 
    return num1 + num2
}
console.log(addNumber(10, 20))

console.log('===============')

// 2. Anonymous functions
let multiplyNumbers = function(num1, num2) { 
    return num1 * num2
}
console.log(multiplyNumbers(10, 20))

console.log('===============')

// 3. Arrow functions
let subNumbers = (num1, num2) => num1 - num2
    
console.log(subNumbers(20, 10))

console.log('===============')

// 4. Constructor function
function Student(name, age, email) { 
    this.name = name
    this.age = age
    this.email = email
}
let student1 = new Student("Kamal", 38, "kamal@gmail.com")
console.log(student1)

console.log('===============')

// 5. Callback functions
function myFunction(callback) { 
    // console.log(abc)
    console.log(typeof callback)
    if (typeof callback === 'function') {
        callback() 
    } else if (typeof callback === 'object') {
        // write the code
    }
}
let person = {
    name: 'Kamal',
    age: 40
}
let numbersArray = [1, 2, 3, 4, 5]

function secondFunction() { 
    console.log('Second Function')
}
myFunction(person)
myFunction(secondFunction)

console.log('===============')

// 6. Recursive functions
function factorial(n) { 
    if (n === 0) {
        return 1
    }
    return n * (factofrial(n - 1))
}
console.log(factorial(5))