console.log('hey there')

let clickButton = document.getElementById('btnClick')
console.log(clickButton)
clickButton.style.backgroundColor = 'red'
clickButton.style.color = 'white'
clickButton.addEventListener ('click', () => 
    // console.log('hello')
    alert('hello')
)

let boxes = document.getElementsByClassName('box')
console.log(boxes)

let headinOnes = document.getElementsByTagName('h1')
console.log(headinOnes)
