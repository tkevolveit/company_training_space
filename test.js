#!/usr/bin/env node

// Get input from a readable stream
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("Type age: ", age => {
    let formatAge = parseInt(age);

    if (formatAge < 6) {
        console.log("Too young age: ", formatAge);
    }

    rl.close();
})


// Import readline
// create interface with passing object takes input and output
// call realine shows the question method and take call the back function.