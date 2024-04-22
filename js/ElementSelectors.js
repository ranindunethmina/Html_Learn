console.log('Hey There')

// ID Selector
let calculateButton = document.getElementById('btnCalculate')
console.log(calculateButton)
calculateButton.style.backgroundColor = 'green'
calculateButton.style.color = 'white'

// button click event listener
calculateButton.addEventListener('click', () => { 
    alert('Hellow World!!!')
})

// class selector
let boxes = document.getElementsByClassName('box')
console.log(boxes)

// tag selector
let headingOnes = document.getElementsByTagName('h1')
console.log(headingOnes)