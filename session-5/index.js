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