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
  - Is win or draw - yes -> count up (streak count: game page, result page)
  - Is lose - no -> Game over
  - Is 26 streak - yes -> STOP COUNT (NO MORE CARDS, CANNOT PLAY)

 - [ ] User Button selection
    - Is user select "high" - yes -> Display "high" on Round page
    - Is user select "low" - yes -> Display "low" on Round page
 

- [ ] Display Deal Spot Card
 - Is match Drawn Dealer Card on Game page and Round Page? - if Yes -> OK 
 - Is match Drawn Player Card on Round Page? - if Yes -> OK 

Cards of Deck Card List Background
- [ ] Add orange background on dealer card
 - Is added dealer class on current dealer card on this turn? - if yes -> -> OK 

- [ ] Add gray background on finished round cards
 - Is added used class on current player card on this turn? - if yes -> OK 
 - Is added finished class on both player and dealer card on this turn end? - if yes -> -> OK 

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
  - Is card draw? - yes -> Display "Win" on Round page
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
    - If no card, then no shuffle, no count up. no add extra classes, Image automatically stop changing(since no card means no src anymore)


- [ ] Reset Game Statement
    - streakCount = 0 
    - roundHeadingEl = 'Enjoy!🏋 <- Any text ok user never see this.
    - highOrLowEl = '🍋🍇🍐🥑🍔🍜' <- Any text ok user never see this.
    - div.card-wrapper = default .card-wrapper class
    - roundHeadingEl = default .font-system class
    - continueBtn = default .btn .btn--continue classes
    - div.page = default .page class
    - dealerRank = 0
    - playerRank = 0
    - spotDealerCard = null (clean memory)
    - spotPlayerCard = null (clean memory)
    - storedCardDeck = originalDeckCardList (52 length)

- [ ] Trigger Start game
    Start Game
    - Is start game by start button
    - Is start game by continue button
    - Is start game by retry button

- [ ] Trigger Reset game
    Reset Game
    - Is reset game by start button
    - Is reset game by home icon button
    - Is reset game by title button
    - Is reset game by retry button


Final Check
- [ ] Test Play
    - Normal Play
        - Is correct navigate lose
        - Is correct naviagte win
        - Is correct navigate draw
    - Check All wins

Total 13



Feature add
- Avoid double click to count up
    - isClick to detect click high or low button to stop continueous count up.
