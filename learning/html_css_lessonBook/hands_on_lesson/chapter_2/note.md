
Overview - Chapter 2
- Add background color
- RGB and more
- Width and position (margin)
- border 
- Box model
    - padding, margin, etc...
- box-shadow
- border-radius
- font
- Selector


Color variation

- RGB
- Hexadecimal (16進数)
    - 0 ~ 255
- HSL 
    H: 色相
        - 0 ~ 360
    S: 彩度
        - 0 ~ 100%
    L: 輝度
        - 0 ~ 100%


Note
- Color Picker
    - [HSL Color Picker]()

- padding: A space inside of content
- box-sizing: box size
    - border-box: includes border
        - Include padding, border
    - content: content だけ、border, padding　は含まない

CSS box model
- margin
    - border
        - padding
            -content


margin
- In order to
    - top, right, bottom, left
- margin: 
    - overlapping

box-shadow: offset offset blur
- 
- blur

border-radius
- round content
- All corner
- 


import fonts
- Use @
- User 環境に依存しない Font 表示が可能
- Google font api
    - Latin Extended: Includes Umlaut
- 日本語はファイルサイズが大きい


CSS selector
- selector
- selector child
- h1, p - All h1 and p
- h1 + p - p under h1 that come immediately after
    - h1 
        - p <- Target selector
        - p
- h1 ~ p - Select all nested p
    - Subsequent siblinig combinator
    - h1
        - p <- Target Select
        - p <- Target Select
- body > h1 - Select all nested element
    - Child combinator
    - similar to h1 ~ p
    - direct children

Stack Overflow:
- [the difference between subsequent sibling combinator (~ )and child selector (>) in css [duplicate]](https://stackoverflow.com/questions/22868288/the-difference-between-subsequent-sibling-combinator-and-child-selector)


For example:
```html
        <div class="parent">
            <p class="child">child</p>
            <div class="parent">
                <div class="child">Nested child</div>
            </div>
        </div>
```

```css
.parent > .child {
    font-size: 30px;
}
```

Result 
- Style to child and nested child


Reference:
- [Webフォントとパフォーマンスの両立を諦めない](https://zenn.dev/ivry/articles/f214469e05e427)
- [CSS selector structure](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors/Selector_structure)

Memo
- ウムラウト（独: Umlaut）umurato
    -  Ä/ä、Ö/ö、Ü/ü のような文字
    - 上下に飛び出す表示、フォントに含まれている余白