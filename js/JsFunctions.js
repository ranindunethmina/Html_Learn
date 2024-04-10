// basic function declaration (wthout parameters)
// function sayHello() {
//     console.log('Hellow World!!!')
// }
// sayHello()

// basic function declaration (wth parameters)
function greeting(firstName, lastName) { 
  console.log('Good morning ' + firstName + ' ' + lastName)
  return firstName + ' ' + lastName
}
greeting('Kamal')
greeting()
greeting('Kamal', 'Perera')
greeting(1, 2)

let greetingReturnValue = greeting('Nimal', 'Silva')
console.log(greetingReturnValue)