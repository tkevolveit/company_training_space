# High and Low 

### Folder
```txt
src/
|-- assets/
  |-- images/
    |-- club
    |-- diamond
    |-- heart
    |-- spade
|-- pages/
  |-- index.html
|-- styles/
  |-- style.css
```


### Files
- title-page.html
- rule-page.html
- game-page.html
- round-page.html
- result-page.html


## Color
- bg: #093A1C
-



### Elements

Button
- スタート - #D1AE2C
- 遊び方 - #FCC300
- タイトルへ戻る - #85563e
- High - #3DB9F2
- Low - #FC4B48 #2EDBC3
- 結果画面へ - rgb(133, 86, 62)
- 続ける - #4AE448
- タイトルへ戻る - #85563e
- リトライ - #FCC300



---

Reference
-PowerShellでtouchができない！代替コマンドとおすすめ解決法](https://maimai-tech.com/programming/terminal/powershell-touch/#st-toc-h-7)
- [WindowsでGit Bashを使ってGitコマンドラインを操作する](https://about.gitlab.com/ja-jp/blog/git-command-line-on-windows-with-git-bash/)



border-box reset styling
- [border-box](https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/box-sizing)


## CSS & HTML Structure
- [Structure Your HTML/CSS Project: Best Practices](https://blog.mikecodeur.com/en/post/structure-your-htmlcss-project-best-practices)

- [CSS Best Practices for Clean Code](https://daily.dev/blog/css-best-practices-for-clean-code/)





SMACSS
SMACSS, or Scalable and Modular Architecture for CSS, sorts your CSS into clear groups:

Base - Basic styles for things like headings and links.
Layout - Big layout pieces, like grids or navigation bars.
Modules - Parts you can use over and over, like cards.
State - Changes in style for things like hidden or active items.
Theme - Different looks, like a dark mode.
For instance:

```css
/* Base */
body {
  font-family: "Arial"; 
}

/* Layout */
.grid {
  display: grid;
}

/* Module */
.card {
  
}

/* State */
.is-collapsed {
  
}

/* Theme */
.theme--dark {
  
}
```



- place-container
  - applied to the grid container as it works on the entire grid.

place-items
- The place-items property is shorthand for align-items and justify-items.

Reference
- [Aligning items in CSS grid layout](https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)


- Organize your HTML and CSS files like a pro


To add a black overlay to an image in CSS
linear-gradient
- [Black transparent overlay on Cover image.](https://teamtreehouse.com/community/black-transparent-overlay-on-cover-image)


`z-index`
- Stacking context
- Require position property, otherwise no make sense.
- 新しい複合レイヤを作成するプロパティの値を追加すると、新しいスタック コンテキストを作成できます。
 - opacity、will-change、transform など
 - Flexbox またはグリッド レイアウト内で Z-Index を使用しても、position: relative がなくても機能します。


Refenrence:
[https://ics.media/entry/200609/](https://ics.media/entry/200609/)