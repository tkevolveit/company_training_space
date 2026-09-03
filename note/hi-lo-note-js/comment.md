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