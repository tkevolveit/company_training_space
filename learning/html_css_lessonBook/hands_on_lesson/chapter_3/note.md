Overview - Chapter 3
- Diaplay image
- figure
- Image layout
    - text-align
    - float
- 


Image
- src: holds the path to the image
- alt: holds a textual replacement for the image
- void element (空要素)
    - 空要素 (void element) とは HTML における要素のうち、子ノード（すなわち子要素およびテキストノード）を持つことができないものを指します。
    - A void element is an element in HTML that cannot have any child nodes 
- self-closing tag


figure
- wrap img, code and more
- without affecting the main flow.

### Image format
Bitmap
- jpeg
- gif

### Vector
- SVG


### Style image
- text-align
    - center and more position



### float
- both: clear;
    - floatで回り込みを解除する方法
    - why need overflow?
        - float するとparent containerのheightが壊れるので`overflow: hidden`で強制する
- left: エレメントを左に配置
- right:　エレメントを右に配置
- float


- float: Moves an item to the left or right side so text and other blocks flow around it. Because the item floats, the parent box does not count its height.
- clear: Stops an item from flowing next to a floated box. Setting clear: both on a separate element forces it to drop below any left or right floats.
- overflow: hidden: Applied to the parent container, it forces the parent to calculate the height of floated children. This "clears" the float without adding extra HTML or clear elements.

- float要素を囲む「親要素」の高さの消失余分なタグの有無に関わらず、float を使うと親要素の高さが 0 になり、後ろの要素が回り込んで崩れます。


- [clearfixを使わないfloat解除](https://www.nedia.ne.jp/blog/tech/2015/01/15/4378)
- [float解除にoverflow:hiddenを使うとまずい例](https://qiita.com/kazhashimoto/items/532dcc5f25f1ab84ecb9)
- [CSSのfloatプロパティで要素を横並びにする方法](https://webst8.com/code/css-float/)
- [html floatの基本 高さを認識させる](https://qiita.com/shizuma/items/e79702c915a557491884)


Memo 
- class attribute (class属性)


<table>
<thead>
    <tr>
        <th>
            設定値
        <th>
        <th>
            意味
        </th>
    </tr>
    <tr>
    </tr>
</thead>
<tbody>
    <tr></tr>
    <td></td>
</tobody>
clear:both;	回り込み(float:leftおよびright)を解除する
clear:left;	float:leftだけを解除する
clear:right;	float:rightだけを解除する
clear:none;	回り込みを解除しない(初期値)
</table>


Step
3-4
Logo

- alt
    - 前後に画像の内容が記載されていれば `alt` は空でいい,
    助長になる　(Redundant text)
    - `alt=""`

- vertical-align
    - align with typography

Note
- 装飾用の画像は CSS で表示 (background)


background-image
- properties
    - background-repeat
    - background-position
- shorthand: 
    - background: url() repeat position 


New Page
- title is displayed on browser tab  (ブラウザ Tab　に表示される)

- section tag
    - grouping element
    - <section> タグは、Webページの中で「意味のある話題やテーマのまとまり（章や節）」を示すためのHTML要素です。
    - (<section> タグは、話題やテーマの１グループとするときに使用)

Bug
- imgタグを囲っている、figureタグをCSSのfloat: left; で左に配置できるようにしていたが、figureタグの中にpタグがあると、CSSのfloat: left;で指定していても効かないことが分かった





Vendor prefix
- `-webkit-`: Safari/Chrome/iOS/Android
- `-ms-`: Internet Explorer
- `-moz-`: Firefox
- `-o-`: Opera