// 1. click event
document.getElementById('btnAdd').addEventListener('click', () => { 
  alert('Added to Cart...')
})

// 2. mouseover event
let box = document.getElementById('box')
box.addEventListener('mouseover', () => { 
  box.style.backgroundColor = 'red'
})

// 3. mouseout event
box.addEventListener('mouseout', () => {
  box.style.backgroundColor = 'green'
})

// 4. keydown event
let userNameField = document.getElementById('userName')
userNameField.addEventListener('keydown', (event) => {
  console.log(event)
  console.log('Key : ' + event.key)
  console.log('KeyCode : ' + event.keyCode)

  console.log('KeyDown.....' + event.key)
})

// 5. keyup event
userNameField.addEventListener('keyup', (event) => {
  console.log('KeyUp.....' + event.key)
})

// 6. submit event
document.getElementById('myForm').addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Form submitted!')
})

// ========= numbers only validation ==========
document.getElementById('numberInput').addEventListener('keydown', function (event) { 
  console.log(event.keyCode)

  if (event.keyCode >= 48 && event.keyCode <= 57) {
   // allow to type   
  } else { 
      event.preventDefault()
      alert("Numbers only")
  }
})