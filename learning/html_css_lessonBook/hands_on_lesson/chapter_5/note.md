Overview - Chapter 5
- article, section
- id
- time, datetime
- CSS priority order
- block level link
- text shadow
- background-image
- linear-gradient

Chapter 5: 17:20 to 12:20
Duration: 4hrs


`alt`
- 装飾的な目的での画像は空でいい
- 通常の画像配置であれば、alt属性は画像のリンク切れ等、画像が表示されない場合、alt属性の値が表示され、視覚的に理解できないユーザー画像の内容を理解することができるが、画像の内容がテキストですでに伝えられている場合はaltは空（alt=""）で良い。
- An empty alt attribute (alt="") in HTML tells screen readers and other helper tools to skip an image because it is purely for decoration or adds no new meaning to the page.

```html
    <article>
        <img 
            src="/src/sunflower-thumb.jpg"
            alt=""
        />
        <h1>真夏のひまわり畑</h1>
        <p>
            森の工房の隣にある畑は、毎年夏になると満開のひまわりの花で黄色く染まります。ひまわりは「日輪草」とも呼ばれ、太陽に向かって花を咲かせます。大きなひまわりは背丈が２メートルを超え、見ごたえも十分です。
        </p>
    </article>
```

Reference
- [画像のalt属性とアクセシビリティ](https://zenn.dev/pacchiy/articles/650e6212dee77b)

`id` attribute
- elements can only have one single ID value.
- `id` は同じページにつきひとつ、同じ`id`は複数存在しないルール
- HTMLの仕様で禁止されています。
- Invalid value（例えば、 my?id や 1234）


Reference 
- [id HTML global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/id)



CSS Priority order (lowest to higest)
- Element / Tag selector
- Class,  attribute, and pseudo-class selectors
- ID selectors
- Inline styles
- !important

Reference
- [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)



`<time>`
- Set with `datetime` attribute
    - `datetime` ではソフトウェアが認識できる形式で記述する
    - datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
    - Better SEO
    - `<time datetime="2013-08-10T11:00">8月10日 11:00am</time>`
-  `datetime` の省略してはダメ、省略できるときは machine-readable value　の時だけ

```html
<time>2013^01-01T10:30</time>
```
- t: time


Link
- Set link to article
- a tag should be block if wrap the content
    - block means content will be block size
    - overflow hidden にするとblock formatting になる、box の高さがでる
    - HTML5以前はdisplayプロパティを使ってブロックレベル要素にしたりしていましたが、HTML5のページであればそのような調整は不要です。

block level link
- ウェブデザインやHTMLにおいて「ブロックレベルのリンク」とは、テキストの一部だけでなく、画像や説明文、カード全体などのブロック（かたまり）全体をclickable（クリック可能）にする手法や要素のことです

Reference
- [ブロックレベルのリンクを作成する](https://gray-code.com/html_css/making-the-link-of-block-level/)



Top page
- `background-image`
- `box-shadow`
- `text-shadow`
    -values: x-offset y-offset blur


memo
- `<hgroup>` tag is deprecated

