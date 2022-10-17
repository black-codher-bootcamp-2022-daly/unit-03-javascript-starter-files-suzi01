function getGrade(total){
    if (total > 90){
        console.log('A+')
    } else if (total > 80){
        console.log('A')
    }else if (total > 70){
        console.log('B') 
    }else if (total > 60){
        console.log('C')
    }else if (total > 50){
        console.log('D')
    }else if (total > 40){
        console.log('E')
    }else if (total > 30){
        console.log('F')
    } else {
        console.log("Fail")
    }
}

getGrade(95) 
getGrade(88)
getGrade(76)
getGrade(61)
getGrade(55)
getGrade(42)
getGrade(35)
getGrade(28)



function getGradeSwitch(total){
    switch (true) {
        case (total > 90):
            console.log('A+')
            break;
        case (total >= 80):
            console.log('A')
            break;
        case (total > 70):
            console.log('B')
            break;
        case (total > 60):
            console.log('C')
            break;
        case (total > 50):
            console.log('D')
            break; 
        case (total > 40):
            console.log('D')
            break;
        case (total > 30):
            console.log('F')
            break;

                

        default:
            console.log("Fail")
            break;
    }
}
    

getGradeSwitch(95) 
getGradeSwitch(88)
getGradeSwitch(76)
getGradeSwitch(61)
getGradeSwitch(55)
getGradeSwitch(42)
getGradeSwitch(35)
getGradeSwitch(28)