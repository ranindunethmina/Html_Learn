let studentsArray = [
  {
      name: 'Kamal',
      marks: 92
  },
  {
      name: 'Amal',
      marks: 73
  },
  {
      name: 'Nimal',
      marks: 78
  },
  {
      name: 'John',
      marks: 100
  },
  {
      name: 'Doe',
      marks: 12
  },
  {
      name: 'NNN',
      marks: 38
  },
  {
      name: 'CCC',
      marks: 59
  },
  {
      name: 'BBB',
      marks: 62
  },
  {
      name: 'UUU',
      marks: -10
  }
]

for (let i = 0; i < studentsArray.length; i++) {
  console.log(getStudentGrade(studentsArray[i].name, studentsArray[i].marks))
}

function calculateGrade(marks) { 
  if (marks >= 90 && marks <= 100) {
      return 'A+'
  } else if (marks >= 80 && marks < 90) {
      return 'A-'
  } else if (marks >= 75 && marks < 80) {
      return 'A'
  } else if (marks >= 65 && marks < 75) {
      return 'B'
  } else if (marks >= 55 && marks < 65) {
      return 'C'
  } else if (marks >= 35 && marks < 55) {
      return 'S'
  } else if (marks >= 0 && marks < 35) {
      return 'F'
  } else { 
      return 'Invalid marks.'
  }
}

function getStudentGrade(studentName, marks) { 
  return studentName + '\'s grade for ' + marks + ' : ' + calculateGrade(marks) 
}