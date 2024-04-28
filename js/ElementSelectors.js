console.log('Hey There')

// ID Selector
let calculateButton = document.getElementById('btnCalculate')
console.log(calculateButton)
calculateButton.style.backgroundColor = 'green'
calculateButton.style.color = 'white'

// class selector
let boxes = document.getElementsByClassName('box')
console.log(boxes)

// tag selector
let headingOnes = document.getElementsByTagName('h1')
console.log(headingOnes)

// querySelector
let button = document.querySelector('#btnCalculate')
console.log(button)

let testDiv = document.querySelector('.test-div')
console.log(testDiv)

let box = document.querySelector('.box')
console.log(box)

let b = document.querySelectorAll('.box')
console.log(b)

let bb = document.querySelector('#container .box')
console.log(bb)

let bbb = document.querySelectorAll('#container .box')
console.log(bbb)