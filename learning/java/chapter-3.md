# Java syntax
Topic
- Boolean
- Compare value
- Compare object (大小の比較)
- logical operator
- if else 
- switch statement


## Conditional (条件分岐)

- contains()
    -  returns boolean value

Compare
- >
- <
- >=
- <=
- ==
- !- not equal


Note
- 比較できるのはprimitive typeだけ
- object type はcompareTo() を使う

- compareTo()
  - return negative means false
  - return 0 means equal
  - return positive means larger
  Javaなどのプログラミング言語で、データの並べ替え（ソート）や大小判定を行う際によく使われます。

  戻り値の比較: 結果を評価する際は、 -1 や 1 と直接比較するのではなく、 0 より小さいか・大きいか（< 0, == 0, > 0）で比較してください。


Compare Process
(1) 文字列の長さが同じで、すべてのインデックスの文字が同じ値だった場合は 0 を返す


(2) 文字列の長さは異なるが、短い方の文字列全体が長い文字列の先頭部分と一致している場合は 対象の文字列.length() - 引数の文字列.length() を返す
 "abc".compareTo("abcd")
 - abcはabcdよりlengthは短いので -1 が戻る


(3) 同じインデックスの文字が異なる値があった場合は 対象の文字列.charAt(k) - 引数の文字列.charAt(k) を返す
target.charAt(k) - parameter.charAt(k)
"abc".compareTo("cbc")
 -2
 a b c 
 aはｃの位置から-2

それぞれの文字に割り当てられているUnicodeコードポイントという数値での比較です。文字・文字列は本質的には数値の集まりだからです。


String.compareTo() メソッドは、2つの文字列を辞書順（Unicodeのコードポイント値）で比較し、その差を整数（int）で返す仕組みになっています。
文字が異なる場合は「文字コードの距離（差）」がそのまま返ってきます。

1. 文字列が完全に同じ場合
0 を返します。

2. 途中で違う文字が現れた場合
最初に見つかった異なる文字の Unicode 値の差（文字A - 文字B）を返します。
例："apple".compareTo("banana")1文字目の 'a'（97）と 'b'（98）を比較します。97 - 98 = -1 なので、結果は -1 になります。

3. 片方の文字列が、もう片方の文字列の先頭部分と完全に一致している場合（長さが違う）
文字列の長さの差（長さA - 長さB）を返します。
例："apple".compareTo("app")先頭の "app" までは同じですが、長さが違います。5（appleの長さ） - 3（appの長さ） = 2 なので、結果は 2 になります。


💡 使うときの注意点
compareTo() の結果を利用するときは、具体的な「-2」や「5」という数値自体に意味を持たせるのではなく、基本的には「0より大きいか、小さいか、等しいか」だけで判定するのが一般的な使い方です。
戻り値 < 0：引数より辞書順で前にある
戻り値 == 0：等しい
戻り値 > 0：引数より辞書順で後ろにある


"t".compareTo("T")
小文字の 't' のUnicode値は 116 です。
大文字の 'T' のUnicode値は 84 です。
計算式：116 - 84 = 32


#### compareToについて
Byte/Short/Integer/Long：保持する整数の大小
Float/Double：保持する小数点付き数値の大小
BigDecimal/BigInteger：保持する数値の大小
Boolean：falseはtrueよりも小さいと判断される
Character：保持する文字のUnicodeコードポイントの数値の大小
String：保持する文字列全体に対して、先頭の文字からCharacterのロジックを用いて大小比較する(辞書順)
Date/Calendar/LocalDate/LocalDateTime等：保持する日付・日時がカレンダー的に過去なら小さい、未来なら大きい
Enum：定数として宣言された順序値(ordinal()で得られる整数値)の大小で判断

Reference
- https://www.bold.ne.jp/engineer-club/java-compareto

- isAfter()
- isBefore()


---


- equals()
    - Can compare values

== 演算子はObjectの比較
```java
str == "test"
==> false
```


---

### Logical operator

|| or operator (論理和)
&&  and operator (論理積)

Ternary operator (三項演算子)


---

if else 

switch statement
```java

switch($target) {
    case $targetValue -> process 
}
```

`$target` : accept String, number and enum

switch expression

- must have default

switch statement
- defaultは必須でない

Old style
```java
switch (a) {
    case 1:
    case 2:
        System.out.println("one-two");
        break;
    case 3:
        System.out.println("three");
        break;
    default:
        System.out.println("four");
        break;
}
```
- Must have break keyword.
- switchはbreakを忘れると意図した動きにならない。


---


## Data Structure
- 値をまとめて扱う仕組みのこと


Set the list
- Use List.of()

- get(): get value
- size(): length
- add(): add new item
- set(): Update item

`List<String>`

- `<String>` means generics

Note
- List.of() is ImmutableCollections
- We cannnot add item


#### Add list 
- Use ArrayList

`var authors = new ArrayList<String>()`
- create new constructor and ArrayList takes the String type

Generics concept
「この箱には、文字列だけを入れたい」
「あの箱には、数字だけを入れたい」

Reference
- https://it-biz.online/java/java-generics/