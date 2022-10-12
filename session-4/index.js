// ****************************************************TASK 1 - OBJECTS****************************************************

let personA = {
    name:'Adrien',
    age:32,
    location: 'Warwick',
    likes:'anime'
};

let personB = {
    name:'Polly',
    age:54,
    location: 'Cheltenham',
    likes: 'sweets'
};

let personC = {
    name:'Mary',
    age:24,
    location:'London',
    likes: 'hunting'
};

let personD = {
    name:"Steve",
    age:14,
    location: 'Birmingham',
    likes: 'gaming'
};



function biography (person) {
    return `Hi, my name is ${[person.name]}. I am ${person.age} years old, I live in ${person.location} and I like ${person.likes}`
}

console.log(biography(personA))










// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);














// ****************************************************TASK 3****************************************************

const myAge = 31;
const minAge = 16;

let check = myAge > minAge

console.log('True or False - I am old enough to drive? ' + check)



// ****************************************************Homework****************************************************


const calculator1 = {
    add: 0,
    subtract: 0,
    multiply: 0,
    divide: 0
}

function calculator (num1, num2, obj) {
    obj.add = num1 + num2;
    obj.subtract = num1 - num2 
    obj.multiply = num1 * num2 
    obj.divide = num1 / num2 
    // return add
}

calculator(3, 5, calculator1)
console.log(calculator1)

// function calculator (num1, num2, obj) {
//     let obj = {
//         add: 0,
//         subtract: 0,
//         multiply: 0,
//         divide: 0
//     }

//     obj.add = num1 + num2;
//     obj.subtract = num1 - num2 
//     obj.multiply = num1 * num2 
//     obj.divide = num1 / num2 
//     return obj
// }


// console.log((calculator(3, 5, calc))

function whoIsOlder (person1, person2) {
    if (person1.age > person2.age){
        let diff = person1.age - person2.age;
        return `${person1.name} is ${diff} years older than ${person2.name}`;
    } else {
        diff = person2.age - person1.age;
        return `${person2.name} is ${diff} years older than ${person1.name}`;
    }
};


console.log(whoIsOlder(personA, personB))