# Populate object into an array and export it

Using ES Modules (Modern JavaScript / Frontend)
This approach is used in modern browser environments, React, Vue, Vite, and newer Node.js applications.

```js
// 1. Initialize the empty array
const modernUserList = [];

const rawNames = ['Alice', 'Bob', 'Charlie'];

// 2. Populate the array using a loop
for (let i = 0; i < rawNames.length; i++) {
  // CRITICAL: Declare the object INSIDE the loop so a new reference is created each time
  const userObj = {
    id: i + 1,
    name: rawNames[i],
    role: 'User'
  };
  
  modernUserList.push(userObj);
}

// 3. Export the populated array
export { modernUserList };
```

#### Import
```js
import { modernUserList } from './yourFile.js';
```



⚠️ Common Pitfall: 
The Object Reference TrapWhen pushing objects into an array inside a loop, always declare the object inside the loop. 
[1] (https://stackoverflow.com/questions/36602160/how-to-push-object-to-array-from-for-loop-properly-in-javascript)

Incorrect ❌ (All array elements will end up identical):
```js
const myItem = {}; // Declared outside
for (let i = 0; i < 3; i++) {
  myItem.id = i;
  myArray.push(myItem);
}
```


Correct  (Every array element is a unique object):
```js
for (let i = 0; i < 3; i++) {
  const myItem = {}; // New object instance created on every iteration
  myItem.id = i;
  myArray.push(myItem);
}
```