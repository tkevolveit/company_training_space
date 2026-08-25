#!/usr/bn/env node

// Get input from a readable stream
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,    // Take a value from terminal input
    output: process.stdout,  // 
});

rl.question(`What's your age?`, age => {
    let inputAge = parseInt(age);

    if (inputAge < 18) {
        console.log("You are not over 18");
    } else if (inputAge < 65) {
        console.log("You are ADULT");
    } else {
        console.log("You are senior");
    }

    rl.close();  // close readline interface
})