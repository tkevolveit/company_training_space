Overview - Chapter 7
- Publish Website
- Validation Check
- Compatible old browsers
    - IE7, 8, 9
- Responsive
    - <meata name="viewport" content="width=$widthp">
- Style aside to be sidebar
- 

```css
    /* IE9 text-shadow */
    zoom: 1;
    filter:progid:DXImageTransform.Microsoft.Shadow(
        Color=#000000, 
        Strength=5,
        Direction=135
    );
```

IE9 gradient color
- SVGにしbase64に変換してCSSの値になる


Note
- Progressive Enhancement
- Graceful Degradation






IE8  以前にグラデーションApply
```html
            <style>
                #photo a {
                    display: inline-block;
                    filter: progid:DXImageTransform.Microsoft.gradient(
                        startColorstr=#ffe7b8,
                        endColorstr=#ffaa00,
                        GradientType=0
                    );
                }
            </style>
```

<!--[if lt IE 9]>
Code is inside here
<![endif]-->


IEモードで確認する方法
(EdgeのIEモード活用術とIEChooserによる開発者ツールの使い方
)[https://smallit.co.jp/blog/a10656/]https://smallit.co.jp/blog/a10656/


`-webkit-text-size-adjust: 100%;`