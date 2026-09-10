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