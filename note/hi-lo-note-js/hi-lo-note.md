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


Remaining - feature
- 特定ボタンからのラウンド(Game reset)リセット
  - Retry
  - Start
  - Home icon
    Reset
      - Streak count
      - Deck length
      - Card classes
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
10. カードのランダム表示
11. カード状況の表示
12. カード使い切った時の、ボタン表示制御

Total 13?

---

## My Development Process
- Write flowchart or diagram (Overview not deep detailed)
- Code a logic
- Code a features functions
- Write DFD (Data flow diagram) to understand data flow and trigger timing
- Refactoring
  - Not combined many feature in a function
  - Function must be one simple feature, like, shuffle, display, updateImg, etc...



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


---

Using Regular Expressions (Best for Path Segments)If the text or number is hidden inside the URL path (like /users/42/profile), use a regular expression to match it.javascriptconst urlString = "https://example.com";

// Match numbers in the path
const match = urlString.match(/\/users\/(\d+)\//);
const userId = match ? match[1] : null; // "42"



Using split() (Best for Simple Slices)If the URL has a predictable structure separated by slashes (/), you can split the URL into an array.javascriptconst urlString = "https://example.com";
const parts = urlString.split("/");

// Find the item name after "items"
const itemIndex = parts.indexOf("items");
const itemName = itemIndex !== -1 ? parts[itemIndex + 1] : null; // "apple"



---

## ReGex
Common ScenariosExtract only the last number:If your path has multiple numbers (e.g., /assets/v2/img_99.png) and you only want the final one.javascript
```js
const src = "/assets/v2/img_99.png";
const lastNumber = src.match(/\d+(?=\D*$)/)[0];
console.log(lastNumber); // Outputs: "99"
```

コードは注意してご使用ください。Extract all numbers as an array:javascriptconst 
```js
src = "/v2/user_45/pic_789.jpg";
const allNumbers = src.match(/\d+/g);
console.log(allNumbers); // Outputs: ["2", "45", "789"]
```

コードは注意してご使用ください。Safely handle missing numbers:Always check if a match exists to prevent code crashes.javascriptconst 

```js
src = "images/no-number.jpg";
const match = src.match(/\d+/);
const number = match ? match[0] : "No number found";
```
コードは注意してご使用ください。RegEx Breakdown\d matches any digit (0-9).+ matches one or more digits in a row.g flag finds all matches instead of just the first one.


How the Regex Works
\d matches any digit (0-9).
+ matches one or more digits in a row.
[0] grabs the first successful match found.

\ - Reservered word (escape sequence)
/ - start regex pattern
+ - 直前の文字の１文字以上の繰り返しにマッチする。
$ - 行の末尾にマッチする。
\D - 数字以外に一致。"[^0-9]"と同意
* -  直前の文字の０回以上の繰り返しにマッチする。

Reference:
- https://qiita.com/iLLviA/items/b6bf680cd2408edd050f


### lookahead
regex negative lookahead is a zero-width assertion syntax used to match a specific position in a string only if it is not followed by a designated pattern.
Syntax: (?!pattern)



---
## Extract only last number REGEX

```js
const url = "https://example.com";
const match = url.match(/(\d+)(?!.*\d)/);

const lastNumber = match ? match[1] : null;

console.log(lastNumber); // "456"
```

Notes:

\d+ captures the last contiguous sequence of digits; group 1 contains the number.
If you need to match negative integers or decimals, adjust the digit portion (e.g., -?\d+(?:.\d+)?).

### How It Works
* `\d+` matches one or more digits.
* `(?!.*\d)` is a negative lookahead ensuring that no more digits exist anywhere later in the string.
* Capturing parentheses `(...)` isolate the digits so you can retrieve them via `match[1]`.
---

### match method
JavaScriptの match() メソッドは、文字列から正規表現に一致する部分を検索・取得するための標準機能です。


regexp): 正規表現オブジェクト（RegExp）。正規表現以外のオブジェクトを渡した場合は、暗黙的に new RegExp(regexp) へ変換されます。
戻り値: 一致した場合は「配列」、一致しない場合は null を返します。



---

#### group regex (\d+)(?!.*\d)/g)

正規表現 (\d+)(?!.*\d) の意味は、「文字列の中で最後に登場する連続した数字」をキャプチャグループとして抽出するパターンです。
最後の /g フラグにより、文字列全体（グローバル）を対象に検索します。
各パーツの分解解説
(\d+) (第1グループ)
\d は数字（0〜9）を表します。
+ は1回以上の繰り返しを表します。
() はグループ化（キャプチャ）を意味し、マッチした数字を抽出します。
(?!.*\d) (否定先読み / Negative Lookahead)(?! ... ) は「この後に ... が続かないこと」を条件とする制約です。
.* は任意の文字（改行を除く）の0回以上の繰り返しです。
\d は数字です。
つまり、「この数字のパターンの後ろには、もう二度と数字が登場しない」という条件になります。

具体的なマッチ例
対象文字列: abc123def456ghi123 の後ろには 456（数字）があるのでマッチしません。
456 の後ろには数字がもう無いので、456 がグループ1として抽出されます。
対象文字列: file_version_9.txt
文字列内の最後の数字である 9 が抽出されます。


---

## 🛠️ Syntax and Mechanics
Syntax: (?!pattern)
Zero-Width: It does not consume any characters in the string; it only validates the condition and leaves the regex cursor in place.
Logical Exclution: If the pattern inside (?!...) succeeds, the whole match attempt fails at that position.

💡 Common Use Cases & Examples
1. Conditional Character MatchingMatch the letter q only if it is not followed by the letter u.
Regex: q(?!u)
Matches: qat, qan, qaid
Fails: queen, quiet

2. Filtering Out Specific WordsMatch any word except for the word "Error".
Regex: \b(?!Error\b)\w+\b
Matches: Success, Warning, Alert
Fails: Error

3. Protocol CleanupMatch the string http only when it is not part of https (useful for upgrading legacy links without breaking existing secure ones).
Regex: http(?!s)
Matches: http://example.com
Fails: https://example.com

⚠️ Engine LimitationsKeep in mind that not all regex engines support lookaheads.
Supported by: JavaScript, Python, PCRE (PHP/Perl), and .NET.
Unsupported by: RE2 (used by Go and Prometheus) due to performance constraints


---


## Clear game statement

#### wipe out classes

Remove class attribute
One simple way to completely remove all tokens is to set the class attribute with setAttribute to an empty string, like so:
```js
element.setAttribute('class', '')
```

```js
element.className = ''
```



- https://foobartel.com/notes/clearing-a-classlist


---

### forEach
NodeList and HTMLCollection


Using .childNodes (NodeList)
The .childNodes property returns a NodeList, which supports the .forEach() method directly:javascript
```js
const parentElement = document.getElementById("parent");

parentElement.childNodes.forEach((node) => {
  console.log(node);
});
```

コードは注意してご使用ください。
Note: .childNodes includes element nodes, text nodes (like whitespace), and comment nodes.

Using .children (HTMLCollection)
The .children property returns an HTMLCollection, which does not have a .forEach() method. To use .forEach(), convert it using Array.from():javascript
```js
const parentElement = document.getElementById("parent");

Array.from(parentElement.children).forEach((element) => {
  console.log(element);
});
```

コードは注意してご使用ください。
sNote: .children only returns HTML element nodes and ignores text or comments.

---


How to Undo a SpliceBecause splice() returns an array containing the elements that were removed, you can save those deleted items into a variable. If you need to undo the operation, use splice() again to insert the saved items back into their original starting index.javascript
```js
let fruits = ['apple', 'banana', 'cherry', 'date'];

// 1. Perform the splice and SAVE the removed elements
let startIndex = 1;
let deleteCount = 2;
let removedItems = fruits.splice(startIndex, deleteCount); 

console.log(fruits);       // ['apple', 'date']
console.log(removedItems); // ['banana', 'cherry']

// 2. UNDO the splice by inserting the removed items back
fruits.splice(startIndex, 0, ...removedItems);

console.log(fruits);       // ['apple', 'banana', 'cherry', 'date'] (Restored!)
```




---


Read
JavaScript、乱数の範囲や重複を指定〜Math.random使い方
- https://fuuno.net/web02/random/random.html

Fisher–Yatesシャッフルのやさしい解説
- Fisher–Yates shuffle