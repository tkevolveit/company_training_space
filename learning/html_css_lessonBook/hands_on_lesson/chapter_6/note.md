Overview - Chapter 6


`table`
- `tr`: row
- `th`: heading
- `td`: data cell


`border-collapse: collapse;`
- Make simple border line

`<caption>`
- This must be at the top of table
```html
<table>
    <caption>Must be here</caption>
    <!-- other code below -->
```
- `caption-side`:
    - It can control caption position

`<form>`

What's the reason we wrap input in labels? - Programming?
- Both methods are valid HTML, but keeping them separate (no wrap) while using the for and id attributes is considered the best practice.

While wrapping an input inside a label (implicit association) is simpler and eliminates the need for IDs, keeping them separate (explicit association) provides superior compatibility with assistive technologies and greater styling flexibility with CSS.


Wrap input in label
- Eliminate id

 Implicit association: By wrapping the input element inside the <label> tag:
<label>
  Username:
  <input type="text" name="username">
</label>

No wrap
- SEO friendly
- best practices

 Using the for attribute: The for attribute matches the id of an input element. For example:

<label for="username">Username:</label>
<input type="text" id="username" name="username">


input[type="submit"] 
- Attribute selectors
- 属性セレクター
- オプションで、属性値または部分文字列の値が一致するように定義します。

Reference
- [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors)

```html
    <form 
        action="/cgi-bin/dmail2.cgi"
        method="post"
    >
```
- action: Data destination
- method: http request method


input type
- text
- search
- url
- tel
- email
- password


value
- データはサーバーに送られる


takuya_kawamura@pc.evolveit.jp


フォームデコードとは、Webページの入力フォーム（<form>タグ）に利用者が書き込んだ内容を、CGIなどのプログラムが自動的に解読（デコード）し、指定したメールアドレスへ送信・通知する機能やサービスの名称です


- Redirecting to a page after submitting form in HTML
純粋なHTML単体では、フォーム送信後に別ページへ自動リダイレクトする機能はありません。別のページへ移動させるには、サーバー側の処理（PHPやNode.jsなど）またはJavaScriptを組み合わせて使います。
- Use onclick attribute to jump another web or file.

example
- `onclick="location.href='./thankyou.html'"`
- `onclick="window.location.href='./thankyou.html'"`