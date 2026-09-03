# Use splice() for NodeList

NodeList に splice() メソッドは直接存在しないため、そのまま呼び出すとエラーになります。
```js
<Image type="small_floating" srcId="0.6.19" />
```

理由
NodeList は配列風オブジェクト（Array-like object）であり、要素数を示す length プロパティや数値のインデックスを持っていますが、Array.prototype のメソッド（splice や push など）は継承していません。

解決策：配列に変換して splice() を使うNodeList を本物の配列（Array）に変換するか、スプレッド構文などを使うことで splice() が利用できるようになります。

1. Array.from() を使う方法

```js
const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);

// 配列になるため splice() が使える
divArray.splice(1, 1);
```
2. スプレッド構文 (...) を使う方法
```js
const divs = [...document.querySelectorAll('div')];

// splice() で操作可能
divs.splice(0, 2);
```

※注意：配列側で splice() を行っても、実際の DOM 要素（HTML上のノード）は削除されません。あくまで取得したリストの要素を加工するための処理になります。