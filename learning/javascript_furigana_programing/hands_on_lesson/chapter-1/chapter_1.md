# Chapter 1

What is JavaScript?
ブラウザ内で動くプログラム言語


- ユーザーが直接操作する部分を作りのに使用
- どこでも動くアプリを手軽に作りたいに応えれるのがJavaScript
    - It runs on Windows, Mac, Android and more.



JavaScript standard
- ECMAScript 
- ES2015(ES6)　を知っていれば大丈夫


How to read tihs text book?

Environment
- Chrome
- VSCode
    - コード補完、色分け等効率化してくれる機能を備えています。

Source code
- Human readable (人間が読み書きするもの)

Exe file
- CPUが理解できる実行ファイル

Langauge Setup
- JP
- Install extenstion "Japanese Language Pack for Visual Studio Code"
- 

Command
- shortcut: shift + Ctrl + P

---

## Arithmatic Operator
- `+`: plus
- `-`: minus
- `*`: multiple
- `/`: divide
- `%`: module
- `**`: exponentiation


整数と実数
- 整数(integer) 小数点以下のない数字
    - 「-2, -1, 0, 1, 2」のような小数点のない数です
- 実数(real numbers, float) 小数点を含む
    - 実数は整数に加えて「1.5」や分数、円周率などの小数もすべて含んだ広い範囲の数です


整数同士の方が計算が高速

計算には優先順位がある
- left to right

- Pre 1 (): grouping
- Pre 5  !, ~, +XX, -YY, ++XX, --YY, typeof
- Pre 7 *, /, %
- Pre 8, +, -

---

## Variables (変数)

We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.

Reference:
(Variables - JavaScript.info)[https://javascript.info/variables]


---

Interpreter
- Rerserved words
     These keywords cannot be used as identifiers for variables, functions, classes, etc. anywhere in JavaScript source.


---

prompt()

- 戻り値: methos が返してくる値
- promppt returns String type.
    - Need to convert a number if you need
    e.g., "80" + 80 // 8080
    - parseInt("80") + 80 // 160

“PROMPT” is a JavaScript Function that is available when you are using JS in browsers (Google Chrome, Safari, Microsoft Edge, etc.), and what this allows us to do is take users' inputs.

[!CAUTION]
> Node.js does not support prompt out of the box like web browsers do. Node.> js does have it's own version of prompt called readline


Data Type
- String
- Number


Conoverting Data type
- parseInt
- ParseFloat

---

Method, Object

- 複数の引数を渡すのはかっこの中にカンマで区切って書きます。

- Object: console
- Method: log

Difference between method and function
- Method belongs to Objec or classes.
- Function standalone blocks of code
    that can be called independently.



### To get know the object property name
Object.getOwnPropertyNames(window): Returns an array of all property and method names on the window.


## Object




継承
JavaScript のすべてのオブジェクトは、1 つ以上の他のオブジェクトを継承しています。継承元になるオブジェクトはプロトタイプと呼ばれ、継承されたプロパティはコンストラクターの prototype オブジェクトにあります。詳細は継承とプロトタイプチェーンを参照してください。

- Prototype: Original Object
- 

var obj = { arr: ['hoge'] }
console.log(obj) // { arr: [ 'hoge' ] }

var arr = obj.arr
obj.arr = []

console.log(obj) // ??? empty array 
console.log(arr) // ??? { arr: ['hoge'] }

---

## Error message
TypeError
- 型のエラー

```bash
Uncaught TypeError: console.lag is not a function
    at <anonymous>:1:9
```
- `at <anonymous>:1:9`: Represent a file name


Reference Error
- Typo, 
- NO found reference, variable, function name and more

```bash
Uncaught ReferenceError: mN is not defined
    at <anonymous>:1:13
(anonymous) @ VM303:1
```

Syntax error
コードの書き方が言語のルールに違反している場合に、プログラムが実行される前の解析（パース）段階で発生するエラーです。

The SyntaxError object represents an error when trying to interpret syntactically invalid code. 

undefined
値がまだ決まっていない、または存在しない変数やプロパティにアクセスしたときに出るメッセージです。

NaN
- Not a Number


---
Note:

JavaScript is able to automatically insert semicolons when consuming the token stream

- token stream
トークンストリーミングとは、AI（LLM）が文章の生成完了を待たず、作成できた部分（トークン）から順次クライアントへリアルタイムに送信する技術です。ChatGPTなどで文字が1文字ずつ画面に表示される仕組みであり、待ち時間（レイテンシ）を大幅に減らします。