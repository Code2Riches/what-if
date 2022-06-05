const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Enter a number to see the corresponding day of the week: "));

if ( num1 === 1){
    console.log("Monday");
} else if ( num1 === 2){
    console.log("Tuesday");
} else if ( num1 === 3){
    console.log("Wednesday");
} else if ( num1 === 4){
    console.log("Thursday");
} else if ( num1 === 5){
    console.log("Friday");
} else if ( num1 === 6){
    console.log("Saturday");
} else if ( num1 === 7){
    console.log("Sunday");
} else {
    console.log("Error - Please enter a number between 1-7");
}
