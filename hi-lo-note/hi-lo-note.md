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