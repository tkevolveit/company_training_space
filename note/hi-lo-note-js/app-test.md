# Test

Make sure each feature correctly working
- Text content
- Logic 

・SPAの確認
・分けていたHTMLの画面を一つに集約
・JavaScriptでHTML表示部分の切り替え
・HighとLowボタンからラウンド画面でのプレイヤー選択文字表示
・連勝記録の表示
・ハイアンドローのボタン判定
・勝敗の判定
・ラウンド画面の勝敗による、hタグの中身の切り替え
・デッキカードのdealerカードと場に出てるdealerカードの表示の一致
・ゲームで使用したdealerカードとplayerカードをラウンド画面への表示
・dealerカードとplayerカードのランクをimage srcから抜き取り
・カードのランダム表示
・カードが無くなった場合のラウンド画面のボタン表示
（結果画面へのボタンだけの表示）
・ゲームの初期化

✅ <- copy this and paste after finishing the test!
 - [ ] Screen navigation (SPA feature)
  - Title - Click Rule -> Rule 
  - Title - Click play -> Game
  - Rule - Click title -> Title
  - Game - click high -> Round
  - Game - click low -> Round
  - Game - click home icon -> Title
  - Round - Click continue -> Game
  - Round - Click result -> Result
  - Result - Click title -> Title
  - Result - Click retry -> Game

 - [ ] Streak Count
  - Is win or draw - yes -> count up
  - Is lose - no -> Game over
  - Is 26 streak - yes -> STOP COUNT (NO MORE CARDS, CANNOT PLAY)

 - [ ] User selection
    - Is user select "high" - yes -> Display "high" on Round page
    - Is user select "low" - yes -> Display "low" on Round page
 

- [ ] Display Drawn Card
 - Is match Drawn Dealer Card on Game page and Round Page? - if Yes -> OK 
 - Is match Drawn Player Card on Round Page? - if Yes -> OK 

- [ ] Extract both cards rank from image src
    - Is correct target number 
        e.g., http://localhost:8080/projects/src/img/card01/spade01.png
         - extract -> 01

- [ ] Extract both cards rank convert to card strength
    - [2(0), 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1(12)]
        - () is index number
    - Is rank 2 is converted weakest (0) - yes -> OK
    - Is rank 1 is converted strongest (12) - yes -> OK

- [ ] Game judge
  - Card rank Weak 2 -> 1 Strongest
  - Pattern check
    - Player RANK vs Dealer Rank 
        - NOTE: ONLY COMPARE THE NUMBERS, NOT JUDGE high or low selection this feature 
    - False: 2 > 1 is lose
    - Truth: 1 > 2 is win
    - Truth: 2 == 2 is win
    - NOTE: JUDGE BASED on RANK strength (Match pattern and boolean)

 
- [ ] Game Judge Heading
  - Is draw? - yes -> Display "Win" on Round page
  - Is the user prediction correct? - yes -> Display "Win" on Round page
  - Is the user prediction correct? - No -> on Round page:
    - Display "Lose"  
    - No conitinue button

- [ ] Shuffle card
    - Get random index
    - Get random cards data from card deck, cards are:
        - dealer
        - player


- [ ] Last Round (NO more card state)
    - Add only dealer class to dealer's card
    - Navigate to the Round page
    - ON the Round page:
        - NO display continue on the Round page


- [ ] Reset Game Statement
     - streakCount = 0 
     - roundHeading = 'Enjoy!🏋
     - highOrLowEl = '🍋🍇🍐🥑🍔🍜'
     - div.card-wrapper = only card-wrapper class
     - continueBtn = only btn btn--continue classes
     - div.page = only page class
     - uniqueDeck = 52 length


Total 11