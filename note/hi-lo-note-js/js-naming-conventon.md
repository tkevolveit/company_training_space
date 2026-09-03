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


---


The Solution: The 4 Prefixes#
You can cover 99% of boolean naming scenarios with just four prefixes. If you stick to these, every boolean becomes a clear, grammatical question.

1. IS: Identity and State Use is when describing what something is right now. It usually pairs with an adjective.

Good: isActive, isDeleted, isEmpty.
Bad: isAccess (Grammar mismatch. Use hasAccess).
2. HAS: Containment and Features Use has when describing ownership or inclusion. It pairs with a noun.

Good: hasAccess, hasChildren, hasValidationErrors.
Bad: hasActive (Grammar mismatch. Use isActive).
3. CAN: Capability Use can to check permissions or potential actions.

Good: canEdit, canDelete, canRetry.
Bad: canAdmin (Vague. Use isAdmin or canAdminister).
4. SHOULD: Intent Use should for business rules or decisions the system needs to make. This separates “what we can do” from “what we want to do.”

Good: shouldRetry, shouldCacheResponse.
Bad: shouldUser (Incomplete. shouldCreateUser?).
Stick to this list. When you mix them up—like writing isAccess or hasActive—you force the reader to stop and re-parse the sentence in their head. That friction is where bugs get introduced.

Prefix	Domain	Function	Example
IS	Identity / State	Describes what an object is currently.	isActive, isEmpty
HAS	Containment	Describes ownership or feature presence.	hasChildren, hasAccess
CAN	Capability	Describes permission or potential action.	canEdit, canRetry
SHOULD	Intent / Logic	Describes a business rule recommendation.	shouldCache, shouldRetry



- https://thatamazingprogrammer.com/posts/stop-naming-your-variables-flag-the-art-of-boolean-prefixes/


---


Use is or has (plus other auxiliary verbs like can or should) depending on the grammatical context of what the boolean variable represents.
When to use is
Use is when describing a state, identity, or condition (usually paired with an adjective or a past-participle verb)

Examples: isActive, isOpen, isVisible, isDeleted, isLoadedMeaning: It tells you what something is or how it looks right now.

When to use has
Use has when describing ownership, containment, or features (usually paired with a noun).

Examples: hasAccess, hasChildren, hasBillingAddress, hasErrorMeaning: It tells you what something contains or what it possesses.

Other Helpful Prefixes
can: Use for permissions or capabilities (e.g., canEdit, canDelete).
should: Use for conditional logic or recommendations (e.g., shouldUpdate, shouldRetry).

Quick Rules for Clean Code
Keep it positive: Prefer isEnabled over negative names like isNotDisabled.
Match the grammar: Make sure the prefix forms a natural phrase. (isActive works, but hasActive is grammatically incorrect).


---

### Function name

The standard JavaScript naming convention for updating a specific item or piece of state is setItemState or setItem, placing the action verb first followed by the target entity. 

Avoid setStateItem unless "StateItem" is treated as a single compound object noun.


💡 Best Practice Guide
lines
Start functions with verbs: Functions perform actions, so they should generally begin with verbs like set, get, fetch, update, handle, or toggle.

Avoid redundant words: If your context or module is already named itemManager.js, naming a function setItemState can become redundant. Prefer concise names like itemManager.set(value) or itemManager.update(value).

State vs. Data: Use set...State predominantly in UI frameworks (like React) where you are interfacing directly with a state dispatcher. 

For standard class properties or plain JavaScript objects, plain set... or native ES6 get/set accessors are preferred.