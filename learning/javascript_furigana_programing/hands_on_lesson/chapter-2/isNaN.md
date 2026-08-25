# isNaN() の基本仕様

引数の数: 1つ（isNaN(value)）
挙動: 引数を数値に変換（型変換）してから判定します。
戻り値: 数値に変換した結果が NaN の場合は true、それ以外は false を返します。2つ以上の引数を渡した場合もし isNaN(val1, val2) のように2つ目以降の引数を渡しても、2つ目以降の引数は無視されます。

JavaScriptでは関数定義に関係なく余分な引数を渡すことがエラーにならないため、最初の引数 val1 だけが評価されます。

注意点と代替手段グローバルな isNaN() は文字列や空文字などを予期せず true と判定することがあります（例: isNaN("hello") は true）。型変換を行わずに厳密に NaN かどうかを判定したい場合は、ES6で導入された Number.isNaN() の使用が推奨されます。


If one of the operands is a Boolean but the other is not, convert the boolean to a number: true is converted to 1, and false is converted to 0.


true = 1
false = 0
like, Binary on and off switch.