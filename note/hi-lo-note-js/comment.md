# Comment

ソースコード内の @param コメントは、関数の引数（パラメータ）の名前や型、役割を説明するための特殊なコメントタグです。
JSDoc（JavaScript）やJavadoc（Java）、Doxygen（C/C++）などのドキュメント生成ツールやエディタ（VS Codeなど）で広く使われています。

@param の主な役割
エディタの補完・表示: 関数にカーソルを合わせたときや呼び出すときに、引数の説明がツールチップ（ポップアップ）で表示され、コードが読みやすくなります。
ドキュメントの自動生成: コメントから仕様書やAPIリファレンスを自動で作ることができます。
型の明示: 引数にどんなデータ（文字列や数値など）を渡せばいいか一目で分かります。書き方の

基本例（JavaScript / JSDoc）

javascript
```js
/**
 * ユーザーの情報を取得する関数
 * @param {string} userId - ユーザーの固有ID
 * @param {boolean} [includeDeleted=false] - 削除済みユーザーも含めるか
 * @returns {Object} ユーザー情報オブジェクト
 */
function getUserInfo(userId, includeDeleted) {
  // 処理
}
```

構成要素@param: 引数を説明する合図のタグです。{型}（省略可能）: 引数に期待されるデータ型（string, number, boolean など）を指定します。
引数名: 対象となる引数の名前を記述します。

---


JSDocコメントの種類
JSDocコメントには先にあげた@typeや@param以外にたくさんあります！
よく使われるものを紹介します！

JSDocの種類	コメントの意味
@type	値の型や説明を記述する
@param	関数の引数の説明を記述する
@returns	関数の戻り値を記述する
@see	資料を示し、合わせて確認してほしいものを示す
@author	開発者の名前を記載する時に利用
@deprecated	非推奨であることを示すもの
@function	メソッドの定義であることを示す
@seeは、具体的に言うとライブラリのリンクなどがコメントに記載されることが多い印象
@authorは役割分担の記録としても利用される
@deprecatedはあまり見る機会がないですが、利用してほしくない関数に利用するものでリファクタリングの際に利用する
@functionはメソッド、具体的にはアロー関数式で関数を書く場合に利用することが多い


- https://qiita.com/tanimoto-hikari/items/29f829d21d0cd6be91c8


---

JavaScriptのソースコードコメント（JSDoc）における @param タグには、関数の引数（パラメータ）の「型」「引数名」「説明」を記述します。（※正しくは @params ではなく単数形の @param と記述します）
📝 基本的な書き方と構文基本的な構文は以下の通りです。
javascript
```js
/**
 * @param {型} 引数名 - 引数の説明
 */
コードは注意してご使用ください。具体例javascript/**
 * ユーザーの年齢を計算する
 * 
 * @param {string} birthDate - 生年月日（YYYY-MM-DD形式）
 * @param {boolean} [isIncludeToday=false] - 計算に当日を含めるかどうか
 * @returns {number} 計算された年齢
 */
function calculateAge(birthDate, isIncludeToday = false) {
    // 処理...
}
```

🛠️ パターン別の記述方法
1. 省略可能な引数（オプショナル）引数名を []（角括弧）で囲むと、省略可能な引数であることを示せます。= を使ってデフォルト値を書くこともできます。javascript
```js
/**
 * @param {string} [userName] - ユーザー名（省略可能）
 * @param {number} [timeout=3000] - タイムアウト時間（デフォルト: 3000ms）
 */
```

2. 複数の型を受け入れる場合（Union型）|（パイプ）で区切ることで、複数の型を指定できます。
```js
/**
 * @param {string|number} userId - ユーザーID（文字列または数値）
 */
```

3. オブジェクトのプロパティを細かく指定する場合オブジェクトの構造や、その中の特定のプロパティについて説明したい場合は、ドット区切りで書くか @typedef を使って型を定義します。
```js
/**
 * @param {Object} options - オプション設定
 * @param {string} options.theme - テーマ名（'dark' または 'light'）
 * @param {boolean} [options.autoSave] - 自動保存の有無
 */
```

4. コールバック関数を指定する場合関数を受け取る引数の場合、引数や戻り値の型も合わせて定義できます。
```js
/**
 * @param {function(number, string): void} callback - 処理完了時に呼ばれるコールバック
 */
```

✨ @param を書くメリット
エディターの補完・ホバー表示の強化：VS Codeなどのエディターで関数にカーソルを合わせた際、引数の型や説明がポップアップ（ツールチップ）で表示されるようになります。
簡易的な型チェック：JavaScriptであっても、エディター上での型ミスの検知や、// @ts-check を有効にした際の静的解析に役立ちます。
ドキュメントの自動生成：JSDocなどのツールを使って、ソースコードから綺麗なHTML形式のAPI仕様書を自動生成できます