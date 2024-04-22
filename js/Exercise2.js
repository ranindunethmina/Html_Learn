function checkGradeLogic(name,mark){
    if(mark <0 || mark>100 ){
        console.log("Name:"+name ,'  ' , "Invalid Number")
    }
    else if(mark>=90){
      return (getStudentGrade(name,mark,"A+"))

    }else if(mark>=80){
      return (getStudentGrade(name,mark,"A-"))
  
    }else if(mark>=75){
      return (getStudentGrade(name,mark,"A"))
  
    }else if(mark>=65){
      return(getStudentGrade(name,mark,"B"))
  
    }else if(mark>=55){
      return(getStudentGrade(name,mark,"C"))
  
    }else if(mark>=35){
      return(getStudentGrade(name,mark,"S"))

    }else{
      return(getStudentGrade(name,mark,"F"))

    }
  }
  
  function getStudentGrade(name, mark,grade){
    console.log("Name:"+name ,'  ' ,"Mark:"+mark, "  " , "Grade"+grade)
  
  }

  checkGradeLogic("Kamal",92)
  checkGradeLogic("Nimal",73)
  checkGradeLogic("Namal",78)
  checkGradeLogic("Saman",100)
  checkGradeLogic("Ashan",12)
  checkGradeLogic("ashen",38)
  checkGradeLogic("Kushen",59)
  checkGradeLogic("neth",62)
  checkGradeLogic("ran",10)
  checkGradeLogic("mal",-10)
  checkGradeLogic("sha",105)
