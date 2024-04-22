class Person {
    constructor(name, age, phone, email) {
        this.name = name
        this.age = age
        this.phone = phone
        this.email = email
    }
}

let person = new Person('Kamal', 40, '0773627367', 'kamal@gmail.com')
console.log(person)
console.log('Name : ', person.name)
console.log('Age : ', person.age)
console.log('Phone : ', person.phone)
console.log('Email : ', person.email)