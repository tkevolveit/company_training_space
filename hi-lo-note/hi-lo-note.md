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


Logic parts
勝利判定：ハイ or ローを選び、その結果を表示する

- カードは自動で出ている
- プレイヤーがhighかlowで判定はいる
- 


Remaining
- カードのランダム表示
- カード状況の表示
- 特定ボタンからのラウンド(Game reset)リセット
- 


Finished
1. SPAの確認
2. 分けていたHTMLの画面を一つに集約
3. JavaScriptでHTML表示部分の切り替え
4. HighとLowボタンからラウンド画面でのプレイヤー選択文字表示
5. 連勝記録の表示
6. ハイアンドローのボタン判定
7. 相手のカードと自分のカードの数の大小判定
8. 相手のカードと自分のカードの数の大小判定
    Aの処理
9. Round headingの表示

Total 11?

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

```js
// 元の取得データを更新し、UIの値の更新
count.dataset.streakCount = currentCount; // 属性の値を更新
count.textContent = currentCount;  // 要素の値を更新
```



#### Increment patterns

x++
 - Name: Post increment
 - Timing: Returns current value, then increments
 - Return value: Original value

++x
 - Name: Pre-increment
 - Timing: Increments, then returns new value
 - Return value: New (Incremented) value

X += 1
 - Name: Addition assignemnt
 - Timing: Evaluates right side, adds, then returns new value
 - Return value: New (Incremented) value


Post increment
The JavaScript engine creates a temporary backup of the variable's current state. It then adds 1 to the actual variable but passes the un-incremented backup value to the rest of the expression.
let x = 5;
let y = x++; 

console.log(y); // 5 (Returned the old value before incrementing)
console.log(x); // 6 (The variable itself is now updated)
```

Pre-Incremnet
The JavaScript engine immediately adds 1 to the variable in memory. It then passes this newly updated value directly to the surrounding statement
```js
let x = 5;
let y = ++x; 

console.log(y); // 6 (Returned the new value after incrementing)
console.log(x); // 6 (The variable itself is updated)
```


Addition Assignment
This is functionally a shorthand for x = x + 1. The engine evaluates the right side, adds it to the variable, updates the variable, and returns the final value. In terms of timing and return value, it behaves identically to ++x.The primary advantage of += is flexibility: while ++ can only change a value by exactly 1, += allows you to increment by any number.
- 元の変数へ代入
```js
let x = 5;
let y = (x += 1); 

console.log(y); // 6 (Returned the final assigned value)
console.log(x); // 6

// Flexibility advantage:
x += 5; // Increments x by 5 instead of 1
```



### Extract multiple elemennt from Object
- Card display per round


- forEach
実はNodeListオブジェクト自体に独自のforEach()メソッドがある。

```js
NodeList.prototype.forEach() - Web APIs | MDN
const links = document.querySelectorAll('a');
links.forEach(link => {
  console.log(link.href);
});
```

- spread
ES6に導入されたスプレッド構文で、NodeListオブジェクトを配列に変換する方法

```js
const links = document.querySelectorAll('a');
[...links].forEach(link => {
  console.log(link.href);
});
```



Extract 2 elements

```js
const items = document.querySelectorAll('.item');

for (let i = 0; i < items.length; i += 2) {
  const first = items[i];
  const second = items[i + 1]; // Might be undefined if the total count is odd

  console.log(first?.textContent, second?.textContent);
}
```
i += 2: Moves the loop counter forward by two numbers each time instead of one.items[i]: Grabs the first item of the current pair.
items[i + 1]: Grabs the second item of the current pair.


Card display TODO
要素を全取得して、ひとつづつボタンで要素を抜出、重複しずに最後まで Javascript

```js
// シャッフル関数（フィッシャー・イェーツのシャッフル）
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```


```js
const quotes = ['Stay curious.', 'Keep coding.', 'Never give up.'];
let currentIndex = 0; // Pointer index track

const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('click', () => {
  // Extract the current element
  const currentQuote = quotes[currentIndex];
  console.log(currentQuote);

  // Increment the index, resetting to 0 when it hits the end
  currentIndex = (currentIndex + 1) % quotes.length;
});
```
Summary of Extraction StrategiesEvent Delegation (event.target): Handles clicks dynamically across multiple items without attaching separate listeners to each button.
dataset.index: Bridges the gap between structural HTML elements and logic-driven JavaScript memory arrays safely.
Modulo Operator (%): Safely cycles index sequences infinitely without throwing an array out-of-bounds error.






JavaScript で配列から重複なくランダムに複数の要素を取り出す方法


JavaScriptの場合配列をシャッフルするか、ランダムなインデックスを2つ生成して分割します。重複がないように取得するには sort や配列のコピーを使います。

```js
javascriptconst array = ['apple', 'banana', 'orange', 'grape'];

// 配列をシャッフルして最初の2つを取り出す
const shuffled = [...array].sort(() => Math.random() - 0.5);
const [item1, item2] = shuffled;

console.log(item1); // ランダムな要素1
console.log(item2); // ランダムな要素2
```



JavaScriptの配列から重複せずにランダムで2つの要素を取り出し、それぞれ別の変数に代入するには、配列をコピーしてsplice()メソッドを使う方法が簡単です。コード例
```js
javascriptconst array = ['りんご', 'バナナ', 'みかん', 'ぶどう', 'いちご'];

// 元の配列を汚さないようにコピーを作る
const copyArray = [...array];

// 1つ目のランダムな要素を取り出す
const index1 = Math.floor(Math.random() * copyArray.length);
const [item1] = copyArray.splice(index1, 1);

// 2つ目のランダムな要素を取り出す（残った配列から選ぶ）
const index2 = Math.floor(Math.random() * copyArray.length);
const [item2] = copyArray.splice(index2, 1);

console.log(item1); // 例: 'みかん'
console.log(item2); // 例: 'りんご'
```
コードは注意してご使用ください。ポイント配列のコピー: [...array] で元の配列が書き換わらないようにしています。
splice()と分割代入: splice() は取り出した要素を「配列」で返すため、[item1] のように分割代入を使うことで、配列ではなく中身の値を変数に格納できます。
重複の防止: 1回目に取り出した要素を配列から削除しているため、同じ要素が2回選ばれることはありません



---

### splice get undefined
player card undefined
index.js:258 []

空の配列に対して処理を行っている配列自体が空（[]）の状態で splice やシャッフルを適用し、その後に要素を取り出そうとすると undefined になります。処理の前に配列が空でないか、または undefined になっていないかを確認してください。javascriptif (array && array.length > 0) {
  // ここで処理を行う
}