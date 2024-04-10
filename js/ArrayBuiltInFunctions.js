let studentNames = ['Kamal', 'Amal', 'Nimal'];
console.log('Student Array : ', studentNames)

// Built-in functions

console.log('===============')

// 1. push - adds one or more elements to the end of array
studentNames.push('John', 'Marsh')
console.log('Student array after push : ', studentNames)

console.log('===============')

// 2. pop - removes the last element from an array and returns that element
let poppedName = studentNames.pop()
console.log('Popped Name : ', poppedName)
console.log('Student array after popped : ', studentNames)

console.log('===============')

// 3. shift - removes the first element from an array and returns that element
let shiftedName = studentNames.shift()
console.log('Shifted name : ', shiftedName)
console.log('Student array after shifted : ', studentNames)
console.log('0 index after shifted : ', studentNames[0])

console.log('===============')

// 4. unshift - adds one or more elements to the beginnign of an array
studentNames.unshift('Josh', 'Steve')
console.log('Student array after unshifted : ', studentNames)

console.log('===============')

// 5. concat - combines two or more arrays and returns a new array
// without modifying the existing arrays
let maleNames = ['Kusal', 'Dimuth', 'Pathum']
let femaleNames = ['Chamari', 'Nimali', 'Ushani']

let cricketers = maleNames.concat(femaleNames)
console.log('Cricketers array : ', cricketers)

// 6. slice - returns a copy of a portion of an array into a new array
let fruits = ['apple', 'mango', 'orange', 'avacado']
console.log('Array after sliced from 0 index : ', fruits.slice(0))
console.log('Array after sliced from 1 index : ', fruits.slice(1))
console.log('Array after sliced from 2 index : ', fruits.slice(2))
console.log('Array after sliced from 3 index : ', fruits.slice(3))

// 7. splice - Changes the contents of an array by removing or replacing 
// existing elements and / or adding new elements
let fruitsArray = ['apple', 'mango', 'orange', 'avacado']
fruitsArray.splice(2, 1, 'mangoose')
// The first argument 2 represents the index at which the modification will start. In this case, it starts at index 2, which corresponds to the third element in the array ('orange').
// The second argument 1 specifies the number of elements to remove from the array starting from the index specified. In this case, it removes 1 element from index 2, which is 'orange'.
// The third and any subsequent arguments represent the elements to be added to the array starting from the index specified. In this case, 'mango' is added at index 2.

console.log('Fruits array after spliced : ', fruitsArray)

// 8. reverse
let letters = ['a', 'b', 'c', 'd']
console.log('Letters array : ', letters)
console.log('Reversed letters array : ', letters.reverse())

// 9. sort
let lettersArray = ['a', 'e', 'b', 'z', 't']
console.log('Letters array sorted : ', lettersArray.sort())

let testingArray = ['Amal', 'Kamal', 'Dog', 100]
console.log('testingArray : ', testingArray)
console.log('testingArray 0 index : ', typeof testingArray[0])
console.log('testingArray 3 index : ', typeof testingArray[3])
