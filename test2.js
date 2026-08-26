#!/usr/bin/env node

// Get input from a readable stream
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Greeting: ", msg => {

    let createMail = (name) => {
        console.log("Nice to meet you " + name)
    }

    createMail(msg)
});


// Import readline
// create interface with passing object takes input and output
// call realine shows the question method and take call the back function.