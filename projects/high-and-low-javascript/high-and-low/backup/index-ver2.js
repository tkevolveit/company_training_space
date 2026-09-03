// Pages
const titlePage = document.querySelector('.title-page');
const rulesPage = document.querySelector('.rule-page');
const gamePage = document.querySelector('.game-page');
const roundPage = document.querySelector('.round-page');
const resultPage = document.querySelector('.result-page');
const page = document.querySelector('.page');

// Buttons
const ruleBtn = document.getElementById('btn-rule');
const backBtn = document.getElementById('btn-back');
const playBtn = document.getElementById('btn-play');
const homeBtn = document.getElementById('btn-home');
const highBtn = document.getElementById('btn-high');
const lowBtn = document.getElementById('btn-low');
const continueBtn = document.getElementById('btn-continue');
const resultBtn = document.getElementById('btn-result');
const retryBtn = document.getElementById('btn-retry');
const titleBtn = document.getElementById('btn-title');

// DOM Content
const highOrLowEl = document.getElementById('high-or-low');
const streakCountsEl = document.querySelectorAll('.streak-count');
const roundHeadingEl = document.getElementById('round-heading');

const originalDeckCardEl = document.querySelectorAll('.card-wrapper'); // typeof originalDeckCardEl = object
let storedCardDeck = Array.from(originalDeckCardEl);  // Convert object to array

// Internl variables
let dealerRank = 0;
let playerRank = 0;
// For display card spot and round page.
// Init global variable, can be updated
let spotDealerCard = {};
let spotPlayerCard = {};
// console.log(typeof spotDealerCard, typeof spotPlayerCard)

// Update img src
const dealerCardImg = document.querySelectorAll('.dealer-card');
const playerCardImg = document.querySelector('.player-card');
// Init global variable, can be updated, extract card rank
let dealerCardImgSrc = '';
let playerCardImgSrc = '';
// console.log(typeof dealerCardImgSrc, typeof playerCardImgSrc)

// Add hidden class at first loading
// 読み込み時に初期化して 'hidden' クラスを付与
window.addEventListener('DOMContentLoaded', () => {
    clearGameState();
    // rulesPage.classList.add('hidden');
    // gamePage.classList.add('hidden');
    // roundPage.classList.add('hidden');
    // resultPage.classList.add('hidden');
    // titlePage.classList.add('hidden');
})

/**
 * changeDisplayPageはページ切り替えの関数
 * @param {*} showEl 表示したいページの対象を受け取る
 * @param {*} hideEl 隠したいページの対象を受け取る
 */
const changeDisplayPage = (showEl, hideEl) => {
    // console.log('show: ', showEl);
    // console.log('hide: ', hideEl);

    // クリック後、classの付けけ外し
    showEl.classList.remove('hidden');
    hideEl.classList.add('hidden')

    // if (showEl.classList.contains('hidden')) {
    //     showEl.classList.remove('hidden');
    //     hideEl.classList.add('hidden')
    // }   
}


/**
 * changeHighOrLowSpanContentは'HIGH'か'LOW'の文字表示の関数
 * @param {*} e Passing down either highBtn or lowBtn
 * And get value from those button
 * e.target.value expects: 'high' or 'low'
 * Assign the value to highOrLowEl and update
 */
/**
 * changeHighOrLowSpanContent - プレイヤーが選択したボタンを表示
 * @param {*} e はhighBtnかlowBtnのクリックイベントからこの関数へパスしてきます
 * 取得したbutton情報からvalueを取得し大文字へ変換して、
 * highOrLowElへvalueを渡しています。
 * 文字の表示結果は'HIGH'か'LOW'となります。
 */
const changeHighOrLowSpanContent = (e) => {
    // Insert value
    highOrLowEl.textContent = e.target.value.toUpperCase();
}

/**
 * countUpStreakは連勝記録更新の関数
 * count.dataset.streakCount = string なのでpasreInt()で数値にしてから、
 * カウントアップしてます。
 */
const countUpStreak = () => {
    streakCountsEl.forEach(count => {
        // Convert String to number
        let currentCount = parseInt(count.textContent);

        // Count up
        currentCount++;

        // Update
        // 元の取得データを更新し、UIの値の更新
        count.dataset.streakCount = currentCount;
        count.textContent = currentCount;
        // console.log(currentCount)
    })
}

/**
 * convertCardRank - 取得した数値をカードランクの強さに変換
 * @param {*} cardRank startGameで取り出した数値をパスする
 * パスする変数: dealerRank、playerRank
 * Rankの強さ: ２が最弱、１が最強
 * 予想結果: cardRank 2 = 0, cardRank 1 = 12
 */
const convertCardRank = (cardRank) => {
    const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 1];

    // Access rank and convert element value to index num
    // rankにアクセスしてcurrentPlayerRankの値をindexに更新し、強さの値をルールに揃える 
    let convertedCardRank = rank.indexOf(cardRank);
    // console.log(`Converted ${cardRank}: `, convertedCardRank);
    return convertedCardRank;
}

const resetRoundHeadingClass = () => {
    if (roundHeadingEl.classList.contains('text-pale')) {
        roundHeadingEl.classList.remove('text-pale');
    } else if (roundHeadingEl.classList.contains('text-red')) {
        roundHeadingEl.classList.remove('text-red');
    }
}

/**
 * gameJudgeはゲームの勝敗を判定する関数
 * @param {*} playerSelectedButton highかlowボタンの値を取得
 * ボタンからHighかlowの二択を判定
 * プレイヤーの予想を判定
 * カードの判定は win or draw = count up, lose = game over and no count
 * 勝敗によりRound Headingの文字を変え、classを付与
 */
const gameJudge = (playerSelectedButton) => {
    // Test
    // playerRank = 1; // strongest
    // dealerRank = 2;

    // Card rank
    let currentPlayerRank = convertCardRank(playerRank)
    let currentDealerRank = convertCardRank(dealerRank)
    // console.log("player rank: ", currentPlayerRank)
    // console.log("dealer rank: ", currentDealerRank)

    // Test button selection
    // let playerSelectedButton = "low".toLowerCase();
    // let playerSelectedButton = playerSelectedButton;
    
    // 1.playerSelectedButton
    // 2.playerSelectOption
    if (playerSelectedButton === "low") {
        // console.log("low")
        
        // Check player's prediction
        // Player's Prediction: LOW
        // Playerの予想がlowの時の処理
        if (currentPlayerRank < currentDealerRank) {
            console.log("win")
            resetRoundHeadingClass();

            roundHeadingEl.textContent = "win";
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {
            console.log("draw, win")
            resetRoundHeadingClass();

            roundHeadingEl.textContent = "Draw";
            roundHeadingEl.classList.add("text-pale");
            countUpStreak();
        } else {
            console.log("lose")
            resetRoundHeadingClass();

            roundHeadingEl.textContent = "Lose";
            roundHeadingEl.classList.add("text-red");
            continueBtn.classList.add("hidden");
            console.log("game over");
        }
    } else if (playerSelectedButton === "high") {
        // console.log("high")
        
        // Check player's prediction
        // Player's Prediction: HIGH
        // Playerの予想がlowの時の処理
        if (currentPlayerRank > currentDealerRank) {
            console.log("win")
            resetRoundHeadingClass();

            roundHeadingEl.textContent = "win";
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {
            console.log("draw, win")
            resetRoundHeadingClass();

            roundHeadingEl.textContent = "Draw";
            roundHeadingEl.classList.add("text-pale");
            countUpStreak();
        } else {
            console.log("lose")
            resetRoundHeadingClass();

            roundHeadingEl.textContent = "Lose";
            roundHeadingEl.classList.add("text-red");
            continueBtn.classList.add("hidden");
        }
    }
}

const shuffleIndex = () => {
    return Math.floor(Math.random() * storedCardDeck.length);
}

const getCardImgSrc = (dealerCard, playerCard) => {
    // playerCard = storedCardDeck[shuffleIndex];
    // shuffleで要素を取得したらsrcの更新で画面と値をリンクさせる
    // Update image src
    dealerCardImgSrc = dealerCard.children[0].src;
    // Update image
    playerCardImgSrc = playerCard.children[0].src;
    // Update Dealer Card Path
    dealerCardImg.forEach(img  => {
        // Update src
        img.src = dealerCardImgSrc;
    })
    playerCardImg.src = playerCardImgSrc;
    // console.log(typeof dealerCardImgSrc, typeof playerCardImgSrc)
}

// CARD RANK
const getCardRank = () => {
    // Extract card rank from src
    // http://127.0.0.1:5500/projects/high-and-low-javascript/high-and-low/src/images/club/club2.png
    // club2 => 2
    // (\d+) = 数字だけ全検索
    // (?=.png) = .pngの前の位置（数字）を指定
    // (?=.png)の代わりにこちらでも可 -> (?!.*\d) = 直前の数字以外はマッチさせない
    // 参照：https://zenn.dev/usamik26/articles/regex-lookahead
    let dealerCardRank = parseInt(dealerCardImgSrc.match(/(\d+)(?=.png)/g));
    let playerCardRank = parseInt(playerCardImgSrc.match(/(\d+)(?=.png)/g));

    // Update global variables
    dealerRank = dealerCardRank;
    playerRank = playerCardRank;

    console.log("dealer rank", dealerCardRank, dealerRank)
    console.log("player rank", playerCardRank, playerRank)
}

/**
 * startGame カードをランダムにして表示
 * 流れ
 * 1.indexをランダムに取得 (起動時毎回)
 * 　(storedCardDeck.lengthは自動で調整される、splice()でstoredCardDeckから要素を削除するため)
 * 2.splice()でカードを一枚(ランダムで)取り出し
 * 3.取り出したカードからsrcを取得
 * 4.取り出したカードのsrcを要素に代入して、HTMLへDisplay
 * 5.取り出したカードのsrcからrank(数字)の抜出し (club2 => 2)
 * 6.抜出したrank(数字)をdealerRank、playerRankへ代入
 * 7.取り出したカードへclassを付与
 *  dealerCard -> dealer class (場に出ているカードの目印として付与)
 *  playerCard -> used (finihsedにするために付与)
 * 8.dealerCardに'dealer'classを付与 
 * 9.playerCardに'used'classを付与(最後のラウンドは不要(残りカード2枚時))
 * 10.spotDealerCardとspotPlayerCardの値を更新
 */
const startGame = () => {
    // Check out of cards and game over
    if (storedCardDeck && storedCardDeck.length === 0)  {
        console.log("No more card!! GAME OVER")
        // changeDisplayPage(resultPage, gamePage);
    }

    // Dealer
    // dealerCard = storedCardDeck[shuffleIndex];
    // shuffleIndex = Math.floor(Math.random() * storedCardDeck.length);
    const [dealerCard] = storedCardDeck.splice(shuffleIndex(), 1);
    console.log("Extract dealer card", storedCardDeck.splice(shuffleIndex(), 1))
    console.log(typeof storedCardDeck.splice(shuffleIndex(), 1))
    // console.log("残りの配列を確認：　", storedCardDeck.length)
    
    // Player
    // shuffleIndex2 = Math.floor(Math.random() * storedCardDeck.length);
    const [playerCard] = storedCardDeck.splice(shuffleIndex(), 1);
    console.log(shuffleIndex())
    // console.log("残りの配列を確認2： ", storedCardDeck.length)

    getCardImgSrc(dealerCard, playerCard)
    // playerCard = storedCardDeck[shuffleIndex];
    // shuffleで要素を取得したらsrcの更新で画面と値をリンクさせる
    // Update image src
    // dealerCardImgSrc = dealerCard.children[0].src;
    // // Update image
    // playerCardImgSrc = playerCard.children[0].src;
    // // Update Dealer Card Path
    // dealerCardImg.forEach(img  => {
    //     // Update src
    //     img.src = dealerCardImgSrc;
    // })
    // playerCardImg.src = playerCardImgSrc;
    // console.log(typeof dealerCardImgSrc, typeof playerCardImgSrc)
    
    getCardRank();
    // CARD RANK
    // Extract card rank from src
    // http://127.0.0.1:5500/projects/high-and-low-javascript/high-and-low/src/images/club/club2.png
    // club2 => 2
    // (\d+) = 数字だけ全検索
    // (?=.png) = .pngの前の位置（数字）を指定
    // (?=.png)の代わりにこちらでも可 -> (?!.*\d) = 直前の数字以外はマッチさせない
    // 参照：https://zenn.dev/usamik26/articles/regex-lookahead
    // let dealerCardRank = parseInt(dealerCardImgSrc.match(/(\d+)(?=.png)/g));
    // let playerCardRank = parseInt(playerCardImgSrc.match(/(\d+)(?=.png)/g));

    // // Update global variables
    // dealerRank = dealerCardRank;
    // playerRank = playerCardRank;

    // console.log("dealer rank", dealerCardRank, dealerRank)
    // console.log("player rank", playerCardRank, playerRank)

    // Add dealer class after using the card
    dealerCard.classList.add('dealer')
    
    // Pending -> finished after clicking high or low
    if (storedCardDeck.length > 1) {
        playerCard.classList.add('used')
    }

    // Update global variables both dealer and player spot cards
    spotDealerCard = dealerCard;
    spotPlayerCard = playerCard;
    console.log(typeof spotDealerCard, typeof spotPlayerCard)
    console.log("spot dealer", spotDealerCard);
    console.log("spot player", spotPlayerCard);

    // console.log("d", dealerCard)
    // console.log("p", playerCard)

    // console.log("total unique: ", storedCardDeck)
    console.log("Remaining Cards: ", storedCardDeck.length)
}

// Last round no need to add class
const addFinishedClass = (dealerCard, playerCard) => {

    // Add finished class to used card
    if (storedCardDeck.length > 1) {
        dealerCard.classList.add('finished');
        // console.log("spot", spotDealerCard);
        
        dealerCard.classList.remove('dealer');
        playerCard.classList.remove('used');
        playerCard.classList.add('finished');
        // console.log("spot", spotPlayerCard);
    } 
}

/**
 * Reset Game Statement
 * DEFAULT STATEMENT:
 * - streakCount = 0 
 * - roundHeadingEl = 'Enjoy!🏋 <- Any text ok user never see this.
 * - highOrLowEl = '🍋🍇🍐🥑🍔🍜' <- Any text ok user never see this.
 * - div.card-wrapper = default .card-wrapper class
 * - roundHeadingEl = default .font-system class
 * - continueBtn = default .btn .btn--continue classes
 * - div.page = default .page class
 * - storedCardDeck = 52 length
 *     - NOTE: storedCardDeck needs to be reassign originalDeckCardEl as array since it has destroy the element by splice(). 
 *             Restore is important for retry game.
 */
const clearGameState = () => {
    streakCountsEl.forEach(count => count.textContent = 0);
    roundHeadingEl.textContent = 'Enjoy!🏋';
    highOrLowEl.textContent = '🍋🍇🍐🥑🍔🍜';

    originalDeckCardEl.forEach(cardEl => {
        // console.log(cardEl)
        cardEl.classList.remove("used")
        cardEl.classList.remove("dealer")
        cardEl.classList.remove("finished")
        // console.log(cardEl)
    })

    resetRoundHeadingClass();

    continueBtn.classList.remove("hidden")

    if (page.classList.contains('page--result')) {
        page.classList.remove('page--result');
        console.log("page--result is removed")
    }

    storedCardDeck = Array.from(originalDeckCardEl);
    console.log("RELOAD...Initial Deck: ", storedCardDeck.length)
    
    dealerRank = 0;
    playerRank = 0;

    // console.log(spotDealerCard, spotPlayerCard)
    spotDealerCard = null;
    spotPlayerCard = null;
    // console.log(spotDealerCard, spotPlayerCard)
    // console.log(originalDeckCardEl);

    console.log("Game is cleared")
}

// Switch pages
// Title -> Rules
ruleBtn.addEventListener('click', () => {
    changeDisplayPage(rulesPage, titlePage);
})

// 
backBtn.addEventListener('click', () => {
    changeDisplayPage(titlePage, rulesPage);
})

playBtn.addEventListener('click', () => {
    startGame();
    // changeDisplayPage(gamePage, titlePage);
})

homeBtn.addEventListener('click', () => {
    clearGameState();
    // changeDisplayPage(titlePage, gamePage);
})

highBtn.addEventListener('click', (e) => {
    const playerSelectedButton = e.target.value.toLowerCase();

    // Check No card to hide continueBtn
    if (storedCardDeck && storedCardDeck.length === 0) {
        console.log("last round", storedCardDeck.length)
        continueBtn.classList.add("hidden")
    }

    changeHighOrLowSpanContent(e)
    addFinishedClass(spotDealerCard, spotPlayerCard);
    gameJudge(playerSelectedButton);
    // changeDisplayPage(roundPage, gamePage);
})

lowBtn.addEventListener('click', (e) => {
    const playerSelectedButton = e.target.value.toLowerCase();
    
    // Check No card
    if (storedCardDeck && storedCardDeck.length === 0) {
        console.log("last round", storedCardDeck.length)
        continueBtn.classList.add("hidden")
    }

    changeHighOrLowSpanContent(e)
    addFinishedClass(spotDealerCard, spotPlayerCard);
    gameJudge(playerSelectedButton);

    // changeDisplayPage(roundPage, gamePage);
})

continueBtn.addEventListener('click', () => {
    console.log("continue");

    startGame();
    // changeDisplayPage(gamePage, roundPage);
})

resultBtn.addEventListener('click', () => {
    page.classList.add('page--result');
    // changeDisplayPage(resultPage, roundPage);
})

retryBtn.addEventListener('click', () => {
    
    clearGameState();
    // changeDisplayPage(gamePage, resultPage);
})

titleBtn.addEventListener('click', () => {

    clearGameState();
    // changeDisplayPage(titlePage, resultPage);
})