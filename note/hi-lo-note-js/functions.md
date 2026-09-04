# JS functions

## 3. Hoisting
3.1 Hoisting in Regular Functions
In JavaScript, function declarations are hoisted to the top of their containing scope. This means you can call a regular function even before it’s defined in the code.

regularFunction();

function regularFunction() {
    console.log("This is a regular function.");
}
// logs "This is a regular function."
In this example, regularFunction is called before its definition, but it works just fine because of hoisting.

3.2 Hoisting in Arrow Functions
Arrow functions, however, are not hoisted. If you try to call an arrow function before it’s defined, you’ll get a ReferenceError.


- Reference: https://kirillibrahim.medium.com/great-confusion-about-differences-between-regular-and-arrow-functions-af60b684ae92