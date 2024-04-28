let student = {}
console.log('Student : ', student)
console.log('Type of student : ', typeof student)

student = {
    firstName: 'Kamal',
    lastName: 'Perera',
    email: 'kamalperera@gmail.com',
    phoneNumber: '0773748932',
    age: 17,
    isRegistered: true
}

console.log('Student : ', student)

console.log('Student Email (using dot notation) : ', student.email)
console.log('Student Email (using square brackets notation) : ', student['email'])

// assigning values using dot notation
student.age = 20;
console.log('Student age : ', student.age)
console.log('Student : ', student)

// assigning values using square brackets notation
student['age'] = 22;
console.log('Student age : ', student.age)
console.log('Student : ', student)

// ============
console.log('========')

let person = {
    name: 'Kamal',
    age: 20,
    phone: '0778327821',
    greet: () => {
        console.log('Hey Good morning!')
    }
}
console.log(person.greet())

console.log('==========')

// Iterating over properties
for (let key in person) {
    console.log(key + ' : ' + person[key])
}

console.log(person.age)
console.log(person['age'])
