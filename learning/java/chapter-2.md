# Java Basic

JShell
Mathmatic operation (算術演算子)
- plus (+)
- multiple (*)
- divide (/)
- module (%)

Literal string (文字列リテラル)
- String use ""
- Concat "Hi" + "there"

Escape sequence 
- \
- new line: \n
- e.g., \"


Text block
- """ ... """
```java
"""
abc
def
gh
"""
```

Exceptional error
3 / 0 (Zero divide)
- java.lang.ArithmeticException: / by zero

3.0 / 0 (floating zero divide)
- Infinity
Javaのfloat型（またはdouble型）でゼロ除算を行った場合、例外は発生せず、IEEE 754規格に基づいてInfinity（無限大）またはNaN（非数）になります。

値が無限大か判定したい場合は Float.isInfinite()、非数か判定したい場合は Float.isNaN() を使います。

構文エラー
- プログラムの誤りがあるとき

例外
- 動作に誤りがあるとき


Method
- toUpperCase()
- length()
- repeat()
 - To use this for repeating string
    - "abc ".repeat(3) ==> abc abc abc
- replace()
    (replace, newWord)
    - 一致するところを変換する

- substring()
 - Set start position
 - Skip the value to output

```java
// 置換前文字列 Aが8個
String strBefore = "AAAAAAAA";

// "AAA"→"B" に置換
String strAfter = strBefore.replace("AAA", "B");

// Output -> BBAA (AAA -> B, AAA -> B) replaced 2 times
```

Argument (引数)
Return value (戻り値)


Overload
- 名前がおなじで引数が違うmethod
- 


Format string
%s - string parameter (書式指定子)
%d - digit

```jshel
jshell> "No tax%, dyen tax includes %,dyen".formatted(1000, 1100)
$24 ==> "No tax 1,000yen tax includes 1,100yen"
```


formatted(Object...)
- `...` means many arguments receive


### Stack trace
スタックトレースとは、「どのクラスの、どのメソッドが、どの行で、どんなエラーを起こしたか」を順番に記録したものです。






### What is signature in Java?
A method signature is a combination of the method name and the data types, number, and order of its parameters


a method signature consists strictly of two things: the method name and the parameter list

A signature is:
- a method name and parameters
    - display(int a) : Signature: display(int)



## Variables
- symbol means variable name




## Compound assignment operator

- += : addition assignemnt operator
- -= : subtraction assignment operator
- *= : mulitplication assignment operator
- /= : division assignment operator


+= (加算代入): addition assignment operator (x += y は x = x + y の意味)
-= (減算代入): subtraction assignment operator (x -= y は x = x - y の意味)
*= (乗算代入): multiplication assignment operator (x *= y は x = x * y の意味)
/= (除算代入): division assignment operator (x /= y は x = x / y の意味)


++var : Print out a result value
var++ : Print out a refeernce value
    - Mean not immediate 


## Types

Integer
- byte: 8ビット（-128 〜 127）
- short: 16ビット（-32,768 〜 32,767）
- int: 32ビット（約-21億 〜 21億）
- long: 64ビット（非常に大きな整数

Floating type
- float: 32ビット（単精度小数）
- double: 64ビット（倍精度小数。小数のデフォルト
- boolean
- char
    - Use single quote ''
- String
    - Use double quote ""

String 
- Reference type


Primitive
- No method

Reference type
- Has method


Casting
- Change the data type
- Use ($typehere)
e.g., 
```java
var e = 3.2
var d = (int) e // integer 3
```


## 日本円みたいなコンマがある数字の変換
- NumberFormat
- getInstance
- parse the value
```java
String g = "12,33"
g ==> "12,33"

jshell> java.text.NumberFormat.getInstance().parse(g)
```

Number to string
- Use valueOf()
```java
String s = String.valueOf(123)
```

With comma
- Use formatted is quick
```java
s = "%,d".formatted(12345)
```


---

Built-in API
- Class library
- package
    - Classification of class
    - 関連するクラスやインターフェースをグループにまとめて整理するための仕組みです
- import 
    - Use to import a pacakge, avoid full name

- FQN (Fully qualified name) (完全修飾名)
- java.time.LocalDateTime.now()


- plusDays()
- Get future day

more
- plusWeeks()


### Specify the day (日付指定)
- Use of(year, month, day)
- LocalDate.of(2021, 9, 14)

Also time
- var javadaystime = LocalTime.of(14, 30)


 format specifier (書式指定子)
 format: hh時mm分
 ```java
 "%tH時%tM分".formatted(today, today)
 
 "%tH時%<tM分".formatted(today)

 "%tY年%<tm月%<td日".formatted(java17days)
 ==> "2021年09月14日"
 ```

java.time.format.DateTimeFormatter.ofPattern()
- Analyze date object output
- 指定したパターン文字列を使って日時を文字列に変換したり、文字列から日時へ変換したりするためのフォーマッターを作成するメソッドです。



"%tY年%<tM月%<td日".formatted(java17days)
|  例外java.util.IllegalFormatConversionException: M != java.time.LocalDate

To format a LocalDate as a string in Java, you use the DateTimeFormatter class introduced in Java 8. A LocalDate object itself does not hold a custom format and will always default to yyyy-MM-dd when printed directly. To view it differently, you must convert it into a formatted String

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();

        // 1. Define the pattern
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        // 2. Format the date into a String
        String formattedString = date.format(formatter);

        System.out.println(formattedString); // Output example: 07/09/2026
    }
}
```


- use .ofPattern()

- LocalDate object does not hold format.
- To convert formatted string.


---

### static method and instance method

static method
- class.method
- class名を指定して呼び出す

instance method
- value.method
- 値に呼び出すmethod

---

### formatted and format
format($format, $value)

```java
String.format("%tY年", today);
$12 ==> "2026年"
```

### BigDecimal
```java
BigDecimal.valueOf(579).multiply(BigDecimal.valueOf(0.05))
```
- JavaにはBigDecimalを簡潔に書く方法はない
- 演算子は使えないのでmethodを呼ぶ必要がある
- 15桁以上は扱えない (Cannnot handle 15 more digits)

---

### new keyword

- new call method as known as constructor.

```java
// constructor is BigDecimal
new BigDecimal()

```

Javaのコンストラクタとは、new演算子でオブジェクト（インスタンス）を生成する際に自動で呼び出される特別な初期化処理のことです。

--- 

### Object


new -> constructor -> generate class (object)

BigDecimal 
- type is double

- Javaは1を２で割る整数は正確
- 実数はbinaryなので、deciamlで書いたのはずれてくる

正確な数字を扱うには
- valueOfで実数を渡す
- double -> string
- double limit 15 digits
- newを使うのが一番正確


---

## Swing

- Import swing: `import javax.swing.*`

- Call Jframe: `new Frame("")`

- Call GUI: `setVisible(true)`

- Expand size: `setSize(x, y)`

- set location: `setLocation(x, y)` 

- get current location: `getLocation()`

- Set input: `new JTextField()`

- Add component: `add("North", var)

- Validate component to display: `validate()`

- Set value of input: `setText()`

- get current input value: `getText()`

- Add button: `new Button($value)`

- Add listener: `addActionListener(e -> method)


#### Drawing
- Set drawing frame: `new JFrame("drawing")`

- Add label component: `new JLabel()`

- Window resize (preferred size): `.pack()`
Java Swingの pack() メソッドは、ウィンドウ（JFrame や JDialog など）のサイズを、内部に含まれているコンポーネント（ボタンやラベルなど）の推奨サイズ（preferred size）に合わせて自動調整するためのメソッドです。

- Import image package: `import java.awt.image.BufferedImage`

- Set image frame: `new BufferedImage(600, 400, BufferedImage.TYPE_INT_RGB)`
 - BufferedImage(w, h, type)

 - Create drawing object: `$var.createGraphics()`

 - Draw line: `$var.drawLine(sx, sy, ex, ey)`
    - s: start, e:end

- re-draw (再描画で表示): `$var.repaint()`

- Import color pacakge: `setColor(java.aws.Color.RED)`

- Draw rectangle: `fillRect(x, y, w, h)`


- Close program: `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`


Note
- UI means component
 - an individual part, element, or ingredient that combines with other pieces to form a larger system, machine, or whole.
- 画面の表示部 = component


- JFrame:  window
- JTextfield: Input field
- JTextArea: Text area (multiple lines of text)
- Jbutton: button
- JPanel: Panel layout
- JLabel: Label


Graphic method
- drawline
- drawString
- drawRect
- drawOval
- fillRect
- fillOval
- setColor


Lambda expression
var -> function
ラムダ式（Lambda Expression）とは、プログラミングにおいて名前を持たない関数（無名関数・匿名関数）を簡潔に記述するための記法です。


### Class and Objet instance
- Create new object
 - Use new keyword
 - 

Objectの参照はメモリーの参照となる

```js
// Personクラスのオブジェクトを作成し、変数 p に参照を代入する
Person p = new Person();
```
変数 p：オブジェクトのメモリー上の住所（参照）が入ります。
new Person()：メモリー（ヒープ領域）に実際のオブジェクトを作ります

- つまり、変数はメモリーの場所を参照する。

#### 参照の代入
別の変数に代入しても、オブジェクトがもう1つ増えるわけではありません。同じ参照（住所）がコピーされるため、2つの変数は同じオブジェクトを指します

```java
Person p1 = new Person();
p1.name = "Alice";

// p1 の参照を p2 に代入
Person p2 = p1; 

// p2 を通して名前を変更すると...
p2.name = "Bob";

// p1 の名前も "Bob" に変わる
System.out.println(p1.name); // 出力: Bob
```

---


### Declaration package
- `package projava`
- パッケージに属しているclassは宣言必要

#### import
- import は、別のパッケージ（フォルダのようなもの）にあるクラスやインターフェースをプログラムで使えるように宣言するキーワードです。


##### class declaration
- file extension: .java

```java
public class Sample {
    public static void main(String[] args) {}
}
```

Proceedual (逐次実行)

Coding rule (コーディング規約)
- コード整形などの共通ルール

Java naming convention

Classes 
- Should be PascalCase
    - `class Student()`

Interface
- Should be PascalCase
    - `Interface Remote()`

Method
- Should be verbs
- The first lettercase lowercase
- `public static void main(String [] args)  {}`


Variables
- Should be meaningful
- Should not start
    - underscore
    - dollar sign

Constant
- All uppercase

Packages
- lowercase
- reverse domain naming converntion
```java
import java.util.Scanner
```


class MyBag
myBag 
getBag()