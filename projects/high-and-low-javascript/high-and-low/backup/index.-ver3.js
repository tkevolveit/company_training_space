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
const roundHeadingEl = document.getElementById('round-heading');
const streakCountList = document.querySelectorAll('.streak-count');
const dealerCardImgList = document.querySelectorAll('.dealer-card');
const playerCardImgEl = document.querySelector('.player-card');

const originalDeckCardList = document.querySelectorAll('.card-wrapper');
let storedCardDeck = Array.from(originalDeckCardList);  // splice()使用する為、NodeListから配列へ変換

// Internal variables
let spotDealerCard = {};  // Card Data取得用で作成、取得後はobjectのため {} を代入
let spotPlayerCard = {};  // Card Data取得用で作成、取得後はobjectのため {} を代入

let dealerRank = 0; // Card Rank取得用で作成
let playerRank = 0; // Card Rank取得用で作成

let dealerCardImgSrc = ''; // Image src取得用で作成
let playerCardImgSrc = ''; // Image src取得用で作成

const isEmptyCards = () => storedCardDeck && storedCardDeck.length === 0;  // storedCardDeckの確認用で作榮

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
 * changeDisplayPage - ページ切り替えの関数
 * @param {*} showEl 表示したい対象のページ
 * @param {*} hideEl 隠したい対象のページ
 */
const changeDisplayPage = (showEl, hideEl) => {
    // クリック後、classの付けけ外し
    showEl.classList.remove('hidden');
    hideEl.classList.add('hidden')
}

/**
 * changeHighOrLowSpanContent - プレイヤーが選択したボタンの文字を表示
 * @param {*} selectedButton - highBtnかlowBtnを取得
 * - 文字の表示結果は'HIGH'か'LOW'が表示される
 */
const changeHighOrLowSpanContent = (selectedButton) => {
    highOrLowEl.textContent = selectedButton.target.value.toUpperCase();
}

/**
 * countUpStreak - 連勝記録更新の関数
 */
const countUpStreak = () => {
    streakCountList.forEach(count => {        
        let currentCount = parseInt(count.textContent);

        if (currentCount >= 26) return;

        currentCount++;

        // 元の取得データを更新し、UIの値を更新
        count.textContent = currentCount;
    })
}

/**
 * convertCardRank - 取得した数値をカードランクの強さに変換
 * @param {*} cardRank startGameで取り出した数値
 * パスする変数: dealerRank、playerRank
 * Rankの強さ: ２が最弱、１が最強
 * 変換予想結果: cardRank 2 = 0, cardRank 1 = 12
 */
const convertCardRank = (cardRank) => {
    const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 1];

    // rankにアクセスしてcardRankの値をindexに更新 
    let convertedCardRank = rank.indexOf(cardRank);
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
 * gameJudge - ゲーム勝敗を判定
 * @param {*} playerSelectedButton highかlowボタンの値を取得
 * 流れ
 * - 1.ボタンからHighかlowの二択を判定
 * - 2.プレイヤーの予想を判定
 * - 3.勝敗によりroundHeadingElの文字を変え、classを付与 (resetRoundHeadingClass()の処理後)
 * - - 勝敗判定後 win or draw = count up, lose = no count up (game over), "続ける"ボタンは非表示
 */
const gameJudge = (playerSelectedButton) => {
    
    let currentPlayerRank = convertCardRank(playerRank)
    let currentDealerRank = convertCardRank(dealerRank)

    // Test rank
    currentPlayerRank = 0;

    // Test button selection
    // let playerSelectedButton = "low".toLowerCase();
    // let playerSelectedButton = playerSelectedButton;
    
    // 1.playerSelectedButton
    // 2.player prediction
    if (playerSelectedButton === "low") {
        
        // Check player's prediction
        if (currentPlayerRank < currentDealerRank) {

            resetRoundHeadingClass();
            roundHeadingEl.textContent = "win";
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {

            resetRoundHeadingClass();
            roundHeadingEl.textContent = "Draw";
            roundHeadingEl.classList.add("text-pale");
            countUpStreak();
        } else {

            resetRoundHeadingClass();
            roundHeadingEl.textContent = "Lose";
            roundHeadingEl.classList.add("text-red");
            continueBtn.classList.add("hidden");
            console.log("game over");
        }
    } else if (playerSelectedButton === "high") {
        
        // Check player's prediction
        if (currentPlayerRank > currentDealerRank) {

            resetRoundHeadingClass();
            roundHeadingEl.textContent = "win";
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {

            resetRoundHeadingClass();
            roundHeadingEl.textContent = "Draw";
            roundHeadingEl.classList.add("text-pale");
            countUpStreak();
        } else {

            resetRoundHeadingClass();
            roundHeadingEl.textContent = "Lose";
            roundHeadingEl.classList.add("text-red");
            continueBtn.classList.add("hidden");
        }
    }
}

const shuffleIndex = () => {
    // splice()でstoredCardDeckから要素を削除するため、storedCardDeck.lengthは自動で調整される
    return Math.floor(Math.random() * storedCardDeck.length);
}

/**
 * getCardImgSrc - shuffleで取得したカード要素のsrcを取得
 * @param {*} dealerCard 
 * @param {*} playerCard 
 * 1.shuffleで取得したカード要素からsrcを取得
 * 2.src更新で画面と値をリンクさせる
 * 3.カード画像を反映
 */
const getCardImgSrc = (dealerCard, playerCard) => {

    // Update image src
    dealerCardImgSrc = dealerCard.children[0].src;
    playerCardImgSrc = playerCard.children[0].src;

    // Update Card image
    dealerCardImgList.forEach(img  => {
        img.src = dealerCardImgSrc;
    })
    playerCardImgEl.src = playerCardImgSrc;
}

/**
 * getCardRank - 取得したsrcからカードランクの抜き取り
 * 例）http://127.0.0.1:5500/projects/high-and-low-javascript/high-and-low/src/images/club/club2.png
 *    上記club2の「2」を抜出し
 */
const getCardRank = () => {

    // (\d+) = 数字だけ全検索
    // (?=.png) = .pngの前の位置（数字）を指定
    //   ・(?=.png)の代わりにこちらでも可 => (?!.*\d) = 直前の数字以外はマッチさせない
    // 参照：https://zenn.dev/usamik26/articles/regex-lookahead
    let dealerCardRank = parseInt(dealerCardImgSrc.match(/(\d+)(?=.png)/g));
    let playerCardRank = parseInt(playerCardImgSrc.match(/(\d+)(?=.png)/g));

    // Update global variables
    dealerRank = dealerCardRank;
    playerRank = playerCardRank;
}

/**
 * startGame - カードをランダムで表示、ランクの抜き取り、場のカードの表示
 * 
 * 流れ
 * - 1.storedCardDeckの有無を確認し、無ければ処理しない
 * - 2.indexをランダムに取得 (起動時毎回)
 * - 3.splice()でカードを一枚(ランダムで)取り出し
 * - 4.取り出したカードからsrcを取得
 * - 5.取り出したカードのsrcを要素に代入して、HTMLへ表示
 * - 6.取り出したカードのsrcからrank(数字)の抜出し (club2 => 2)
 * - 7.抜出したrank(数字)をdealerRank、playerRankへ代入
 * - 8.取り出したカードへclassを付与
 * - - dealerCard -> dealer class (場に出ているカードの目印として付与)
 * - - playerCard -> used (finihsedにするために付与)
 * - 9.dealerCardに'dealer'classを付与 
 * - 10.playerCardに'used'classを付与(最後のラウンドは不要(残りカード2枚時))
 * - 11.spotDealerCardとspotPlayerCardの値を更新
 */
const startGame = () => {
    if (storedCardDeck && storedCardDeck.length === 0)  {
        console.log("No more card!! GAME OVER")
        // changeDisplayPage(resultPage, gamePage);
        return;
    }

    const [dealerCard] = storedCardDeck.splice(shuffleIndex(), 1);
    const [playerCard] = storedCardDeck.splice(shuffleIndex(), 1);

    getCardImgSrc(dealerCard, playerCard)
    getCardRank();

    if (storedCardDeck.length >= 0) {
        dealerCard.classList.add('dealer')
    }
    
    if (storedCardDeck.length > 1) {
        playerCard.classList.add('used')
    }

    // Update global variables both dealer and player spot cards
    spotDealerCard = dealerCard;
    spotPlayerCard = playerCard;

    console.log("Remaining Cards: ", storedCardDeck.length)
    // console.log("Has Not cards?", isEmptyCards())
}

// Last round no need to add class
const addFinishedClass = (dealerCard, playerCard) => {

    // 最終ラウンドまで処理 (storedCardDeck = 0 はゲームリセットの為、処理不要)
    if (storedCardDeck.length > 1) {
        dealerCard.classList.remove('dealer');
        playerCard.classList.remove('used');

        dealerCard.classList.add('finished');
        playerCard.classList.add('finished');
    } 
}

/**
 * Reset Game Statement
 * 
 * DEFAULT STATEMENT:
 * - streakCount = 0 
 * - roundHeadingEl = 'Enjoy!🏋 <- Any text ok user never see this.
 * - highOrLowEl = '🍋🍇🍐🥑🍔🍜' <- Any text ok user never see this.
 * - div.card-wrapper = default .card-wrapper class
 * - roundHeadingEl = default .font-system class
 * - continueBtn = default .btn .btn--continue classes
 * - div.page = default .page class
 * - storedCardDeck = originalDeckCardList (52 length)
 *     - NOTE: storedCardDeck needs to be reassign originalDeckCardList as array since it has destroy the element by splice(). 
 *             Restore is important for retry the game.
 */
const clearGameState = () => {
    streakCountList.forEach(count => count.textContent = 0);
    roundHeadingEl.textContent = 'Enjoy!🏋';
    highOrLowEl.textContent = '🍋🍇🍐🥑🍔🍜';

    originalDeckCardList.forEach(cardEl => {
        cardEl.classList.remove("used")
        cardEl.classList.remove("dealer")
        cardEl.classList.remove("finished")
    })

    resetRoundHeadingClass();

    continueBtn.classList.remove("hidden")

    if (page.classList.contains('page--result')) {
        page.classList.remove('page--result');
        console.log("page--result is removed")
    }

    dealerRank = 0;
    playerRank = 0;

    spotDealerCard = null;
    spotPlayerCard = null;

    storedCardDeck = Array.from(originalDeckCardList);
    console.log("RELOAD...Initial Deck: ", storedCardDeck.length)

    console.log("Game is cleared")
}

// Switch pages
ruleBtn.addEventListener('click', () => {
    changeDisplayPage(rulesPage, titlePage);
})

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

highBtn.addEventListener('click', (selectedButton) => {
    const playerSelectedButton = selectedButton.target.value.toLowerCase();

    isEmptyCards() ? continueBtn.classList.add("hidden") : "";

    changeHighOrLowSpanContent(selectedButton)
    addFinishedClass(spotDealerCard, spotPlayerCard);
    gameJudge(playerSelectedButton);

    // changeDisplayPage(roundPage, gamePage);
})

lowBtn.addEventListener('click', (selectedButton) => {
    const playerSelectedButton = selectedButton.target.value.toLowerCase();
    
    isEmptyCards() ? continueBtn.classList.add("hidden") : "";

    changeHighOrLowSpanContent(selectedButton)
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


// Test
