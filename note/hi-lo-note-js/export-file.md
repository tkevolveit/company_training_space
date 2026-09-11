# Export and import

Difference between export default and named export
```js
export default cardDeckArrObj;
export default { cardDeckArrObj };
```

The difference between export default $obj and export default {$obj} is that the first exports the object directly, while the second exports a new object containing $obj as a property (object literal shorthand).

- `export default cardDeckArrObj;`: This does direct export as object
    - exports the object directly
- `export default { cardDeckArrObj };: This does wrapped {} means new object wrapped object
    - exports a new object containing cardDeckArrObj as a property (object literal shorthand)


export default $obj (Direct Export)


(Wrapped in Curly Braces)
```js
const $obj = { name: "Alice", age: 30 };
export default { $obj }; // Equivalent to { $obj: $obj }
```



```js
import myData from './file.js';
console.log(myData.$obj.name); // "Alice"
// Or using destructuring on import:
// import { $obj } from './file.js'; <-- Note: this won't work for default imports directly like this, you must access it via the imported default name:
console.log(myData.$obj); // { name: "Alice", age: 30 }
```

Key Takeaway
Use export default $obj when the file represents the object itself.
Use export default {$obj} when you want to group or wrap the variable inside an object literal container, which changes how you access the properties upon import


Reference
- https://www.geeksforgeeks.org/javascript/what-is-export-default-in-javascript/