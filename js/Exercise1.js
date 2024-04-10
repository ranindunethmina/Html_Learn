function addNumbers(number1, number2) { 
    return number1 + number2
}

function substractNumbers(number1, number2) { 
    return number1 - number2
}

function divideNumbers(number1, number2) { 
    return number1 / number2
}

function multiplyNumbers(number1, number2) { 
    return number1 * number2
}

console.log('Add two numbers : ', addNumbers(10, 20))
console.log('Substract two numbers : ', substractNumbers(10, 20))
console.log('Divide two numbers : ', divideNumbers(10, 20))
console.log('Multiply two numbers : ', multiplyNumbers(10, 20))

// ============

console.log('==========')

console.log(addNumbers(10, 'hi') + ' ~ ' + typeof addNumbers(10, 'hi'))

// NaN => Not a Number
console.log(multiplyNumbers(10, 'hi') + ' ~ ' + typeof multiplyNumbers(10, 'hi'))