# How to clone and reset copied object state?

- Problem is
-  shallow copy won't be reset status


To reset a shallow-copied object state in JavaScript, you need to keep a reference to the original blueprint or state so you can overwrite the modified values. Because a shallow copy to an array still references the same nested memory if not handled carefully, the cleanest approach is to re-assign or re-copy the initial data.Here are the two best ways to reset your object state.

### Method 1: Use a Factory Function (Recommended)

The safest way to manage and reset state is to use a function that returns a fresh copy of your initial object. This prevents any accidental data pollution.

```js
// 1. Define the initial state blueprint
const createInitialState = () => ({
  name: "Alex",
  roles: ["User"],
  isActive: true
});

// 2. Initialize your state and copy it to an array
let userState = createInitialState();
let userArray = [{ ...userState }]; 

// 3. Modify the roles and isActive status
userArray[0].roles.push("Admin");
userArray[0].isActive = false;

console.log("Modified:", userArray[0]); 
// { name: 'Alex', roles: [ 'User', 'Admin' ], isActive: false }

// 4. RESET: Simply regenerate the initial state
userState = createInitialState();
userArray = [{ ...userState }];

console.log("Reset:", userArray[0]); 
// { name: 'Alex', roles: [ 'User' ], isActive: true }
```

### Method 2: Store an Explicit initialState Backup
If you cannot use a function, store a deeply cloned backup of your starting data using structuredClone() before making any modifications.

```js
// 1. Your original object
const baseObject = {
  name: "Alex",
  roles: ["User"],
  isActive: true
};

// 2. Create a dedicated backup copy
const initialState = structuredClone(baseObject);

// 3. Copy to array and modify
let userArray = [{ ...baseObject }];
userArray[0].roles.push("Admin");
userArray[0].isActive = false;

// 4. RESET: Overwrite the array with a fresh copy of the backup
userArray = [structuredClone(initialState)];

console.log("Reset:", userArray[0]);
// { name: 'Alex', roles: [ 'User' ], isActive: true }
```

 #### Why standard shallow copying (...) fails on reset
 
 If your roles property is an array, doing a shallow copy like [...userArray] or {...object} only copies the top-level references. The nested roles array will still point to the exact same place in your computer's memory. Modifying the copy will accidentally modify your backup unless you use structuredClone() or a factory function to break that link.



シャローコピーで十分な場合
    1階層のオブジェクトの場合
    パフォーマンスが重要な場合
    イミュータブルな操作を行う場合（Reduxのステート更新など）
ディープコピーが必要な場合
    ネストされたオブジェクトの完全な複製が必要な場合
    元のオブジェクトとの完全な独立性が必要な場合
    データの永続化や保存が必要な場合



Reference
- https://tech.iimon.co.jp/entry/2024/12/02


---


## Circular reference
JavaScriptにおける循環参照（Circular Reference）とは、オブジェクトが直接的または間接的に自分自身を参照し、ループ（輪）のような状態を作っている構造のことです


循環参照の例オブジェクトが自分自身や親要素のプロパティを指すことで発生します。

```js
const obj = {};
obj.self = obj; // 自分自身を指す（循環参照）
```


When useful structuredClone()?
- Asynchronous validation
- During buffer, this avoid modifying data beforesaved it.



---

スプレット構文やObject.assignはシャローコピー（浅いコピー)といえます

オブジェクトのシャローコピーとは、コピーがコピー元のオブジェクトとプロパティにおいて同じ参照を共有する（同じ基礎値を指す）コピーのことを指します。その結果、コピー元とコピー先のどちらかを変更すると、もう一方のオブジェクトも変更される可能性があります。そのため、意図せずにコピー元やコピー先に予期しない変更が発生してしまう可能性があります。この挙動は、ソースとコピーが完全に独立しているディープコピーの挙動とは対照的です
https://qiita.com/kawabata324/items/11b2476f070e044b1ee0


---

### Deep copy

性能と手軽さ重視：JSON.parse(JSON.stringify(obj))
最も古典的で、広く使われている代替手段です。
メリット: 追加のライブラリが不要。ほぼすべての環境で動作する。
デメリット: コピーできないデータ型が多い（Date は文字列になり、RegExp や Map、Set、Infinity、NaN、関数、undefined などは消失または変換されます）。

```js
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
```



---


## Shallow vs Deep Cloning
Understanding the difference between shallow and deep cloning is crucial for choosing the right method for your use case.

### Shallow Cloning
Shallow cloning creates a new object but only copies the first level of properties. Nested objects and arrays are still referenced, not copied.

```js
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'coding']
};

// Shallow clone using spread operator
const shallowClone = { ...original };

// Modify nested properties
shallowClone.name = 'Jane'; // ✅ Safe - first level property
shallowClone.address.city = 'San Francisco'; // ❌ Affects original!
shallowClone.hobbies.push('gaming'); // ❌ Affects original!

console.log(original.name); // 'John' - unchanged
console.log(original.address.city); // 'San Francisco' - modified!
console.log(original.hobbies); // ['reading', 'coding', 'gaming'] - modified!
```



## Deep Cloning
Deep cloning creates a completely independent copy of the object, including all nested objects and arrays.

```js
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'coding']
};

// Deep clone using JSON methods
const deepClone = JSON.parse(JSON.stringify(original));

// Modify any properties safely
deepClone.name = 'Jane'; // ✅ Safe
deepClone.address.city = 'San Francisco'; // ✅ Safe - doesn't affect original
deepClone.hobbies.push('gaming'); // ✅ Safe - doesn't affect original

console.log(original.name); // 'John' - unchanged
console.log(original.address.city); // 'New York' - unchanged
console.log(original.hobbies); // ['reading', 'coding'] - unchanged
```


Reference
- https://useaxentix.com/blog/javascript/6-ways-to-clone-objects-in-javascript/