// Use this randomNumber inside of the while/for loops to generate a random number
// const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************

let count  = 0;
let collect = []

while (count < 10) {
    const randomNumber = Math.round(Math.random() * 10);
    console.log("Random number",randomNumber);
    collect.push(randomNumber)
    count++;
}

console.log(collect)













// ****************************************************TASK 2****************************************************


let sec_count  = 0;

for(let i = 0; i<10; i++){
    const randomNumber = Math.round(Math.random() * 10);
    console.log("Random number",randomNumber);
    sec_count++;
}








