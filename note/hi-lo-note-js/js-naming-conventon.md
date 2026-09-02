JavaScriptにおける過去形を使った選択済みボタンの命名規則（Naming Convention）について、有効（Valid）かつ一般的に推奨されるパターンを解説します。
結論から言うと、isSelected（状態を表す変数）かselectedButton（要素を表す名詞）が最適です。変数に過去形（単体）を使うのは避け、状態か要素かを明確に区別します。
📋 おすすめの命名規則一覧
isSelectedフラグ（真偽値）に最適。現在の状態を表す。
selectedButtonHTML要素（DOM）の格納に最適。選択されたボタン自体を指す。
hasSelected選択が完了した状態（真偽値）。過去形/完了形を使う場合の標準。

❌ 避けるべき命名（アンチパターン）
selected曖昧すぎる。真偽値（Boolean）か要素（Element）か区別できない。
selectButton動詞から始まる。関数（Function）や処理と誤解されやすい。

💻 コードでの具体的な使い分け
1. 状態（真偽値：Boolean）を管理する場合「ボタンが選択されているか」という状態は、過去形単体ではなく is + 過去分詞 にします。

```js
⭕ 良い例：一目で真偽値とわかる
const isSelected = true; 


// ❌ 悪い例：型が不透明
const selected = true; 
```

2. HTML要素（DOM Element）を管理する場合「選択されたボタンの要素そのもの」を格納する場合は、過去分詞 + 名詞 にします。
```js
⭕ 良い例：ボタンの要素が入っているとわかる
const selectedButton = document.querySelector('.btn.active');


// ❌ 悪い例：関数（クリックする処理）に見える
const selectButton = document.querySelector('.btn.active');
```

3. イベントハンドラー（関数）の場合「ボタンが選択された時」の処理（過去のイベント）には handle + 名詞 + 過去形 または on + 名詞 + 過去形 を使います。

```js
⭕ 良い例：イベント発生後の処理とわかる
function handleButtonSelected() {
  // 処理を書く
}
```

### Boolean
Use is to describe the current state of something.
Example: isLoading, isVisible, isComplete.

Use has to indicate whether something exists or is present.
Example: hasOwner, hasError, hasChildren.

Use can to check whether an action is allowed or possible.
Example: canEdit, canDelete, canView.


Reference:
- https://www.syncfusion.com/blogs/post/top-10-javascript-naming-convention



 Scope-Aware Naming
If a variable is confined to a specific scope, consider using names that indicate its context or purpose.

✅ Good: globalCounter, localIndex, moduleSpecificConfig
🔴 Bad: counter, index, config


- https://tusharupadhyay0504.medium.com/12-best-practices-for-naming-variables-in-javascript-8f855b0582e9
