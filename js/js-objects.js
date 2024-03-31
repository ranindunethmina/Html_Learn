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
student.age = 22;
console.log('Student age : ', student.age)
console.log('Student : ', student)