--- 
Basic SPA structure

<header></header>

<main>
    <!-- Artile is independent content -->
    <article></article>
</main>

~~article - 独立したコンテンツに使用
今回はそれぞれ役割が違うコンテンツを画面いっぱいに表示するので
sectionよりarticleを使用する。~~


---


Start Button - click -> Display Game Screen + add hidden class to Title screen

遊び方 Button - click -> Display 遊び方 Screen + add hidden class to Title screen



HTML id and class naming convention
- id cabab is best
- class cabab or BEM

- component: Pascalcase UserProfile.tsx




data atttibute
- Use when
    - metadata
    The data-* attributes allow you to attach invisible, private data to absolutely any HTML element for application logic
- p tag 

```js
// HTML: <div class="product-card" data-product-id="9875" data-category="shoes"></div>
const card = document.querySelector('.product-card');

// Best for metadata
console.log(card.dataset.productId); // "9875" (automatically camelCased)
console.log(card.dataset.category);  // "shoes"
```


value attribute
- Use when
  - The element value can be implemented using HTML elements <input>,
<button>,<meter>,<li>,<option>,<progress>and <param> elements only.



textContent
- 文字だけ返す


toUpperCase()
- Strings are immutable: The toUpperCase() method does not change the original variable; it returns an entirely new string.
- Use: String convert to uppercae.


Development Proccess
・何連勝目かの表示
    - Game Page
    - Result Page
- 勝利判定：ハイ or ローを選び、その結果を表示する
    - Round Page
・リトライ -> ラウンド１から開始する。
    - Result page -> Game Page
- カードの残数：26連勝（カードが無くなった場合）-> Game Over
- カードの状況、場を表示する
    - 相手のカードの背景色
    - 使用済みのカード
    - 値の割り振り
- カード52枚を、1枚づつ減らしランダムで表示してみる
- ボタンで画像を差し替えてみる


---

data attribute
-  data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

Performance: While data attributes are lightweight, storing a lot of data on DOM elements can impact performance. Be mindful of the amount of data you’re storing in the DOM.

Security: Don’t use data attributes to store sensitive information like passwords or 
personal user data, as this information can be easily accessed through the browser.
 Data Validation: Make sure that any data stored in attributes is validated and properly sanitized if it’s being used for operations like  database queries or dynamic content rendering.



- data attributeでは個人情報は使わない、
- lightweight


複数の要素を一括で更新する複数の要素にデータ属性を持たせ、ループ処理で一斉に書き換える実用的なパターンです。
```js
<p class="update-me" data-content="こんにちは！">初期値A</p>
<p class="update-me" data-content="さようなら！">初期値B</p>

<button id="updateAll">すべて更新</button>
```

キャメルケースへの変換: HTMLで data-content-text のようにハイフンで繋いだ場合、JS側では dataset.contentText のようにキャメルケースで読み替える必要があります。
XSS対策: ユーザーが入力した文字列などを安全に反映するため、innerHTML ではなく必ず textContent を使用してください。


id
- idは接頭辞にjs-を付けることで、JavaScriptで使われていることが明確になります。

```js
document.querySelector('.foo'); // Bad...
document.querySelector('#js-foo'); // Good!
document.querySelectorAll('[data-foo]'); // Good!
```

