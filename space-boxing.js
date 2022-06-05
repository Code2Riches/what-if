const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("How much do you weigh on Earth? "));
let planet = Number(prompt("What planet are you fighting on? (1: Venus, 2: Mars, 3: Jupiter, 4: Saturn, 5: Uranus, 6: Neptune) "));


if (planet === 1){
    console.log("Your weight on Venus will be: " + (weight * .78) + " LBS");
}
if (planet === 2){
    console.log("Your weight on Mars will be: " + (weight * .39) + " LBS");
}
if (planet === 3){
    console.log("Your weight on Jupiter will be: " + (weight * 2.65) + " LBS");
}
if (planet === 4){
    console.log("Your weight on Saturn will be: " + (weight * 1.17) + " LBS");
}
if (planet === 5){
    console.log("Your weight on Uranus will be: " + (weight * 1.05) + " LBS");
}
if (planet === 6){
    console.log("Your weight on Neptune will be: " + (weight * 1.23) + " LBS");
}