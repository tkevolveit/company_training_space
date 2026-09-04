# Lexical scope 

定義
レキシカルスコープとは、変数のスコープがコードを書いた場所（定義した場所） によって決まる仕組みのこと。

関数が「どこで呼ばれたか」ではなく、「どこで定義されたか」によってスコープが決まる。

JavaScriptはレキシカルスコープ（静的スコープ）を採用している
関数は定義時のスコープチェーンを保持する
これがクロージャの基盤になっている

クロージャとの関係
レキシカルスコープがあるからクロージャが成立する。

```js
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    // 返された関数は定義時のスコープ（count）を保持している
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
```

- Function can access a global variable 
- Invoke funcion and function has local variable and inner function executes logic 
and works when calling it and memory is keeping winthin it.

- closure is chaining scope data,