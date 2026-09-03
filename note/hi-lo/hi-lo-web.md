# ハイアンドローWeb版仕様

URLについて
タイトル画面
/highandlow
上記以外は自由にURLを付けてください
それ以外のURLに、初期アクセスした場合は、ゲームタイトル画面へリダイレクトしてください
特定のURLへ直接アクセスした場合
正常な画面遷移を行わず、タイトル画面以外に直接アクセスした場合は、ゲームをクリアしタイトル画面へリダイレクトし、再ゲームとする
画面遷移等について
すべてのリクエストは「post」にて行ってください
ゲームデータ（現在のカード・使用済み・未使用カード）の保持方法
ゲームデータはすべてセッションに保存してください
すっきりわかるサーブレット＆JSPの7、８，９章を参照
https://qiita.com/takahirocook/items/70f9b5bca1da89474b9d
行き成りは難しいので・・・
Springbootの環境構築
環境は、Thymeleaf + SpringMVC（DBは使用しない）
第6部～453ページ目までを参考に。それ以降はDB関連なので使用しない
helloworldの表示
https://medium-company.com/spring-boot-thymeleaf/
タイトル画面の表示を行ってみる
JavaScript版では1つのhtmlになっているが、タイトル画面のHtmlだけにし、画面を表示する
タイトル画面から遊び方画面への遷移・戻る
タイトル画面と同様に遊び方画面のみのhtmlを作成し、それを表示する
ゲームスタートからのカードとテーブル表示
ゲーム画面を表示してみる
ゲーム状態のセッション保存
引いたカードをセッションに保存、それをゲーム画面に表示
リダイレクト等のゲーム初期化処理は、最後にした方が良い



---

ハイアンドローWeb＋DB版仕様
機能的に下記を追加
ラウンド中にブラウザを閉じ、再度いづれかのURLにアクセスした場合、ラウンドを途中から再開できる
ゲーム画面へ遷移し、途中から再開できる
カードの状態はDBで管理する

DBにはH2DBを使用する
https://www.h2database.com/html/main.html
DBのフレームワークはSpringJDBCを使う（ProになるJavaを参考に）
DBテーブル構成
JDBCURL:jdbc:h2:~/highandlow

予め h2ConsoleでDBを作っておく


テーブル名:game_status
ゲーム開始時に、game_noを付与し、行を作成する
ゲーム終了後は、statusを変更し、その行を保存しておく（消さない）
カラム名
型
説明
game_no
Int, PKEY
ゲームを開始するごとに1づつ付与する。１からスタート
winning_streak_record
int
連勝数：0～26
status
VARCHAR(30)
値：
“during_a_game_before_judgment”=ゲーム中（判定前）
“during_a_game_after_ judgment”=ゲーム中（判定後）

“end _of_game”=ゲーム終了


テーブル作成SQL
create table game_status (
	game_no int,
	winning_streak_record int,
	status varchar(20),
	PRIMARY KEY(game_no)
)



テーブル名：card_status
役割：カード52枚の状態を管理する
ゲーム開始時に、すべてのカードを未使用でInsertする
ゲーム終了時に、すべてのカードをdeleteする
カラム名
型
説明
game_no
int
デッキ状態が紐づくgame_no
round_no
int
ラウンドの何番目か 1～26
suit
VARCHAR(5)
値：”spade”,”dia”,”heart”,”club”
rank
VARCHAR(2)
値：
A、2、3、4、5、6、7、8、9、10、J、Q、K
status
VARCHAR(10)
値：
used＝使用済み
unused=未使用
opponent=自分
dealer=相手


テーブル作成SQL
create table card_status (
	game_no int,
	round_no int,
	suit varchar(5),
	rank varchar(2),
	status varchar(10),
	PRIMARY KEY(game_no,suit,rank),
	FOREIGN KEY(game_no) REFERENCES game_status(game_no)
)


---


ハイアンドローSPA＋SpringBoot版
Web＋DB版をSPA版に修正する
htmlは、JavaScript版がベースになる
API形式で、レスポンスはJsonとする
Jsonの基礎知識
Jsonとは
https://hakuhin.jp/js/json.html
SpringBootでの送信と返却
これを実装して試してみることを勧める
https://spring.pleiades.io/guides/gs/rest-service/
https://qiita.com/t-yama-3/items/572fabc873b4b6a0fc7c
API化の候補は下記の通り
すべてのAPIは、POSTでJsonを送信し、対応するゲームの情報を返す
Jsonレスポンスのフォーマットのサンプル
https://www.umayadia.com/Note/Note028WebAPISample.htm

エンドポイント
/spahighandlow
このURLにアクセスするとSPA用のHTMLが返却され、JavaScriptが動き出す
アクセスした際に、GETパラメータにgame_no=?が存在しない場合、タイトル画面を表示する
アクセスした際に、GETパラメータにgame_no=?が存在する場合、そのゲームを再開できる
正確には、タイトル画面表示するのと同時に、JavaScriptにてgetパラメターのgame_noを取得し、その状態をサーバから取得したのちに適切な画面状態に変化させる
表示画面はゲームの状態により変化する



