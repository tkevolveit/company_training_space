# if statement

Overview
- Conditional statement
     - if else
- Compare values
- Comparision
- NaN
    - Global obejct
    - A variabe in global scope



プログラムの制御
- 制御構文という


isNaN
- 数値かどうか確認で使う

- Empty String coerced 0
- Boolean is coerced to 0 or 1.
Both returns false

Return
- true is not a number, like String
- false if value is number

This method asks like:
is this a not a number or is this a number?

> [!Note]
> Number.isNaN() is a more reliable way to test whether a
> valuevalue is the number value NaN or not. 
> Alternatively, the expression x !== x can be used

To test if a value is a number, use typeof x === "number".


ノット演算子

```js
if(!isNaN($var)) {
    // block of code
}

```

比較演算子
- <
- >

returns true or false


### Equality comparisions
- `==`: Cascading a data type
    - loose equality
    If one of the operands is an object and the other is a primitive, convert the object to a primitive.
- `===`:
    - strict equality
    


### Error
SyntaxError: Unexpected token ')'
閉じかっこが無いときのエラー表示

