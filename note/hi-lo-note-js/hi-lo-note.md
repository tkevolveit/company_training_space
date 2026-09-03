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
s

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

### Positive lookahead (?=.png) 
この正規表現表現 (?=.png) は、「直後に .png という文字列が続く位置」にマッチする肯定先読み（Positive Lookahead）という機能です。
文字そのものを選択するのではなく、条件を満たす「位置」を探します。

💡 主な特徴
文字を消費しない: .png という文字自体はマッチした結果（選択範囲）に含まれません。
位置の特定: 「.png の直前の位置」を指定するために使います。

例えば、image1.png から image1 だけを抜き出したい場合、以下のように組み合わせます。

正規表現: [^.]+(?=.png)対象テキスト: image
1.pngマッチする部分: image1 （.png の直前にあるドット以外の文字）
2. 文字の挿入置換機能を使って、.png の直前に文字（例: _backup）を挿入したいときに便利です。検索対象: (?=.png)置換後の文字列: _backup結果: photo.png ➔ photo_backup.png


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


### How to Undo a Splice
Because splice() returns an array containing the elements that were removed, you can save those deleted items into a variable. If you need to undo the operation, use splice() again to insert the saved items back into their original starting index.javascript
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

## Function 

In JavaScript, a function declared with const (known as an arrow function) can either return a value or not return a value, depending entirely on how you write its syntax. If a function does not have an explicit return statement, it automatically returns undefined.

Here is a breakdown of how returns work with const functions:
1. Implicit Return (No return keyword needed)
If your arrow function is a single line, you can omit both the curly braces {} and the return keyword. The expression is returned automatically.
```js
// Automatically returns the sum
const add = (a, b) => a + b; 

console.log(add(5, 3)); // Outputs: 8
```

2. Explicit Return (Requires return keyword)
If you use curly braces {} to create a multi-line function block, you must use the return keyword if you want to send a value back.
```js
const calculateTotal = (price, tax) => {
  const total = price + tax;
  return total; // Explicitly returning the value
};

console.log(calculateTotal(10, 2)); // Outputs: 12
```

3. No Return (Returns undefined)
If your function just performs an action (like logging to a console or modifying an external variable) and you do not use the return keyword inside curly braces, it will return undefined by default.
```js
const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
  // No return statement here
};

const result = sayHello("Alice"); // Logs: "Hello, Alice!"
console.log(result); // Outputs: undefined
```

---

## Arrow function 
In JavaScript, a "const function" refers to a function assigned to a variable declared with the const keyword. This approach is heavily favored in modern JavaScript (ES6+) because it prevents the function from being accidentally overwritten or reassigned elsewhere in your code.

Arrow function
```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Or as a concise one-liner:
const add = (a, b) => a + b;
```


Anonymous Function
```js
const multiply = function(a, b) {
  return a * b;
};
```

🔒Safety Against Reassignment

If you define a function using the traditional function keyword, or with var or let, it can be overwritten later, leading to hard-to-find runtime bugs. Using const throws a compile/runtime error if any code attempts to overwrite it

```js
// Dangerous traditional way:
function logData() { console.log("Data"); }
logData = "Oops, I am a string now"; 
logData(); // ❌ TypeError: logData is not a function

// Safe const way:
const processData = () => { console.log("Processing"); };
processData = "Attempting to change"; // ❌ TypeError: Assignment to constant variable.

```


---


JavaScriptでDOMを更新する関数において return（戻り値）がないのは、呼び出し元へ結果を返す必要がない（副作用のみを目的としている）ためです。

なぜ return がいらないのか？
DOMの更新は「副作用」: textContent や innerHTML の書き換え、要素の追加・削除などは、ブラウザ上のメモリ（DOMツリー）を直接変更する操作です。

これらは関数内部で完結するため、呼び出し元に値を返す必要がありません。
戻り値の省略は undefined: JavaScriptでは return 文を書かない場合、自動的に undefined が返されます。DOM操作を行う関数の多くは、実行して画面を変えることが目的なので、返り値を気にする必要はありません。
具体例（returnなしのDOM更新関数）
```js
// 要素のテキストを更新する関数（returnなし）
const updateText = (selector, newText) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = newText; // DOMを直接書き換える（副作用）
  }
  // return を書かないので、暗黙的に undefined が返る
};

// 使い方
updateText('#my-heading', '新しいタイトル');
```
このように、画面の表示を切り替えたり、クラスを付け外ししたりする関数は、値を計算して次の処理に渡す必要がないため return を書きません。


To update the DOM using an arrow function without a return statement, you can use either a block body with curly braces or a single-line expression body. Since DOM updates (like changing text or styles) are side effects, you do not need to return a value.


1. Block Body (Recommended for side effects)
Use curly braces {}. 
The code executes, returns nothing (undefined), and avoids common linter warnings regarding implicit returns.

```js
const updateText = (elementId, newText) => {
  document.getElementById(elementId).textContent = newText;
};
```

2. Expression Body (Single line)Omit the curly braces {}. 
The single line of code will run and execute the DOM update instantly.
```js
const changeColor = (element, color) => element.style.backgroundColor = color;
```

Note: This technically utilizes an "implicit return," meaning it returns the result of the assignment expression, but the browser completely ignores that value while successfully updating the DOM.Practical Event Listener ExamplesHandling a click event with a Block Body:
```js
const button = document.querySelector('#submit-btn');

button.addEventListener('click', () => {
  document.querySelector('#status').className = 'success';
});
```

Handling an input event with a Single Line:
```js
const input = document.querySelector('#username');

// Updates a live preview paragraph as the user types
input.addEventListener('input', (e) => document.querySelector('#preview').innerText = e.target.value);
```


### JavaScript array returns object

JavaScript doesn't have array type values:
```js
"undefined"
"boolean"
"number"
"string"
"bigint"
"symbol"
"function"
"object"
```

```js
typeof []
// "object"
```
In the ECMAScript spec, arrays are called “exotic objects” — meaning they’re objects with special internal logic.

#### Backward compatibility

JavaScript has one golden rule:
> Don’t break the web.
If typeof [] suddenly started returning "array", it would break millions of websites relying on "object".
So it stays.

We can check array, we use:
```js
Array.isArray([])
```

Conculusion
JavaScript array is fine because if return array then it break the web.

JavaScriptの配列は、内部的にはオブジェクトの一種です。複数のデータを管理するには、角括弧 []（配列リテラル）を使って初期化するのが最も安全で一般的です。変数の宣言には、再代入を防げる const を使うのがおすすめです。

- https://dev.to/kathirvel-s/why-typeof-returns-object-in-javascript-59n7


---

What should the initialized empty varialble type is best?
null or udefined or 
- null は、未割り当てのオブジェクトを表すものです
null は「値が存在しないことを明示的に示す」ために、開発者によって代入される値である。
これは、将来的に値が設定される予定だが、現時点では「空」であることを示す際などに用いられる。


undefined -- 初期化されてないかもしれない; 特定のデータ型に関連付けられていない。
null -- オブジェクトがない、オブジェクトが期待される場所。
NaN -- 数字がない、数字が期待される場所。
false -- 単に真ではない、他の意味はない。

まとめ：使い分けの指針
値	使うべき場面
""	入力欄の初期値、form状態
null	データ未取得、意図的に空を示したい時
undefined	オプショナルな設計、初期化されていない値
SPAにおけるフォーム処理では、基本は "" を使い、データの状態管理には null、型的に省略可能な箇所には undefined を使う、というのが実務的な判断です。

- https://zenn.dev/yuki0401/articles/b70a8702e231eb
- https://www.reddit.com/r/learnjavascript/comments/1433r0f/null_or_undefined_what_should_i_use_if_i_want_to/?tl=ja
---
Read
JavaScript、乱数の範囲や重複を指定〜Math.random使い方
- https://fuuno.net/web02/random/random.html

Fisher–Yatesシャッフルのやさしい解説
- Fisher–Yates shuffle

JavaScript v8 engine
- https://zenn.dev/estra/books/js-async-promise-chain-event-loop/viewer/e-epasync-v8-engine