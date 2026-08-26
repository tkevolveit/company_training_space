# Function



Research
- arrow function
    - Arrow関数式
- function
    - JP: function文
- named function
- function expression 
    - JP (function式)


Template literal
    - JP: テンプレート文字列

- Global variable
- Local variable

Escape sequence


## Object
- property
- value

key-value pair


scope
同じブロックの中でのみ利用可能

hoisting

Local scope types:
- 関数スコープ
- ブロックスコープ

block scope
{} で囲われたブロックを参照範囲とするスコープとなります。


block level 
- function can be nested within an if statement

```js
if (false) {
  function foo() {
    return 1;
  }
}
```

In this case, no hoisting

In strict mode, scoped and hoisted
not global scoped


Functio declaration
- are hoisted to the top of the enclosing function or global scope

```js
hoisted(); // Logs "foo"

function hoisted() {
  console.log("foo");
}
```

Function expression
- not hoisted

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

redeclaration
- var
- function declarations are hoisted before any initializer gets evaluated
- let and const are not redeclared
- strict mode doesn't allow it

```js
var a = 1;
function a() {}
console.log(a); // 1
```



args
残用引数



function main () {
  function print () {
    console.log('a');
  }
  print();
  if (1 > 0) {
    function print () {
      console.log('b');
    }
    print();
  }
  print();
}

main();