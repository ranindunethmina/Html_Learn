let testingVariable;
console.log('Type of testingVariable : ', typeof testingVariable) // undefined

testingVariable = 'Kamal' 
console.log('Type of testingVariable : ', typeof testingVariable) // string

testingVariable = 678
console.log('Type of testingVariable : ', typeof testingVariable) // number

testingVariable = true
console.log('Type of testingVariable : ', typeof testingVariable) // boolean

testingVariable = undefined
console.log('Type of testingVariable : ', typeof testingVariable) // undefined


if(typeof testingVariables === String){
    console.log("hi")
}else if(typeof testingVariables === Number){
    console.log("hi hi ")
}else{
    console.log("heee")
}