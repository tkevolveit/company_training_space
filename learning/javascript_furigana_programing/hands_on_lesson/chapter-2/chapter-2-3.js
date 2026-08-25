#!/usr/bn/env node

// Get input from a readable stream
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Hello", age => {
    if (!Number.isInteger(age))  {
        console.log("you typed a Not a number.")
    }

    if (age  < 18) {
        console.log("Your are age: ", age);
    }
    console.log("end")
    rl.close();
});

// Import readline
// create interface with passing object takes input and output
// call realine shows the question method and take call the back function.