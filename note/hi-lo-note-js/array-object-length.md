# How to get array object length?

JavaScriptでオブジェクト内の配列の要素数を取得するには、対象のプロパティを指定して .length を使用します。お使いのオブジェクトが以下のような構造の場合のコード例です。
```js
// オブジェクトの定義例

const data = {
  ArrObj: [/* 52個の要素 */]
};

// 配列の長さを取得する
const length = data.ArrObj.length;

console.log(length); // 52
```

---

### Object to Array

#### Array.from() is best method
To convert a JavaScript object into an array is by using the Array.from() method. The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. Here is how
```js
let obj = {a: 1, b: 2, c: 3};
let arr = Array.from(Object.entries(obj), ([key, value]) => value);

console.log(arr);
// Output: [1, 2, 3]
```


How spread operator help to convert an Object into an Array
The second last method to convert a JavaScript object into an array is by using the spread operator (...). The spread operator allows you to spread the elements of an iterable such as an object, into a new array.


```js
let obj = {a: 1, b: 2, c: 3};
let arr = [...Object.values(obj)];

console.log(arr);
// Output: [1, 2, 3]
```

Here's what you can do!



Reference
- https://dev.to/awaisalwaisy/7-ways-to-convert-objects-into-array-in-javascript-35m4



---


This is just reference the object
- I need to copy the original for using splice()
  - Just reference the object is not recovering.

```js
import cardArrObj;
let storedCardArrObj = null;
storedCardArrObj = cardArrObj;
```
