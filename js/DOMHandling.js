let box = document.getElementById('box')
// console.log(box)

// 1. innerHTML - sets or returns the HTML content (including HTML tags) of an element
console.log(box.innerHTML)
box.innerHTML = '<span>Hello There</span>'
console.log(box.innerHTML)

// 2. textContent - sets or returns the text content of an element, EXCLUDING HTML tags
console.log(box.textContent)
box.textContent = 'Kamal Perera'
console.log(box.textContent)

// 3. innerText - Same as textContent. But, innerText shows as DOM renders 
// while textContent shows only the textual content
console.log(box.innerText)
box.innerText = 'Nimal Silva'
console.log(box.innerText)

// 4.Applying Styles
let image = document.getElementById('image')
image.style.width = '100px'
image.style.height = '100px'

// 5. setAttribute - sets the value of an attribute on the selected element.
image.setAttribute('src', '/assets/java.png')

// 6. classList - Allows you to manipulate classes on an element
console.log(box.classList)
box.classList.add('aaa', 'bbb', 'ccc')
console.log(box.classList)

box.classList.remove('ccc')
console.log(box.classList)

box.classList.replace('aaa', 'mmm')

// 6. append & appendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr', 'new')
parentDiv.appendChild(childDiv)

// 7. remove & removeChild
parentDiv.removeChild(childDiv)
parentDiv.remove()
