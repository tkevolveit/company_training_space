# Access nested array object

To access an array nested inside an object that is inside another array in JavaScript, you combine bracket notation [index] for the arrays and dot notation .property for the object

```js
outerArray[arrayIndex].objectProperty[nestedArrayIndex]
```


Example
```js
const userRegistry = [
  {
    username: "alice_dev",
    hobbies: ["coding", "hiking", "gaming"] // <-- The array you want to access
  },
  {
    username: "bob_designer",
    hobbies: ["painting", "photography"]
  }
];
```

Accessing a Single Specific Item
```js
// 1. Get the first object in the array -> userRegistry[0]
// 2. Access its 'hobbies' property     -> userRegistry[0].hobbies
// 3. Get the first item in that array  -> userRegistry[0].hobbies[0]

const firstHobby = userRegistry[0].hobbies[0];
console.log(firstHobby); // Output: "coding"
```


Reference
- https://forum.freecodecamp.org/t/accessing-array-within-javascript-object/254624/5