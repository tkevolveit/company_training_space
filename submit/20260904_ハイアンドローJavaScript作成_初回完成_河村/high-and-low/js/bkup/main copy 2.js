import cards from './cardDeckArrObj.js';

console.log(cards)

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
const highOrLowTextEl = document.getElementById('high-or-low-text');
const roundHeadingWinEl = document.getElementById('round-heading-win');
const roundHeadingLoseEl = document.getElementById('round-heading-lose');
const roundHeadingDrawEl = document.getElementById('round-heading-draw');
const streakCountList = document.querySelectorAll('.streak-count');
const dealerCardImgList = document.querySelectorAll('.dealer-card');
const playerCardImgEl = document.querySelector('.player-card');
const highLowButtonWrapperEl = document.getElementById("high-low-button-wrapper");

// FIX: Assign the deck object instead HTMLElement (document.querySelectorAll('.card-wrapper');)
// card is goind to be getElementById(${card-id})
const originalDeckCardList = document.querySelectorAll('.card-wrapper');
let storedCardDeck = Array.from(originalDeckCardList);  // splice()で使用する為、NodeListから配列へ変換

// 内部処理
let globalDealerCard = null;  // Card Data取得用で作成、取得後はobjectのため {} を代入
let globalPlayerCard = null;  // Card Data取得用で作成、取得後はobjectのため {} を代入

let globalDealerCardRank = 0; // Card Rank取得用で作成
let globalPlayerCardRank = 0; // Card Rank取得用で作成

let globalDealerCardImgSrc = null; // Image src取得用で作成
let globalPlayerCardImgSrc = null; // Image src取得用で作成

const isEmptyCards = () => {
    return storedCardDeck && storedCardDeck.length === 0;  // storedCardDeckの確認用で作成
}

/**
 * changeDisplayPage - ページ切り替えの関数
 * @param {object} showEl 表示したい対象のページ
 * @param {object} hideEl 隠したい対象のページ
 */
const changeDisplayPage = (showEl, hideEl) => {
    // クリック後、classの付けけ外し
    showEl.classList.remove('hidden');
    hideEl.classList.add('hidden');
}

/**
 * countUpStreak - 連勝記録更新の関数
 */
const countUpStreak = () => {
    streakCountList.forEach(count => {        
        let currentCount = parseInt(count.textContent);

        currentCount++;

        // 元の取得データを更新し、UIの値を更新
        count.textContent = currentCount;
    })
}

/**
 * convertCardRank - 取得した数値をカードランクの強さに変換
 * 
 * メモ
 * - パスする変数: dealerRank、playerRank
 * - Rankの強さ: ２が最弱、１が最強
 * - 変換予想結果: cardRank 2 = 0, cardRank 1 = 12
 * 
 * @param {number} cardRank - startGameで取り出した数値
 */
const convertCardRank = (cardRank) => {
    const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 1];

    // rankにアクセスしてcardRankの値をindexに更新 
    let convertedCardRank = rank.indexOf(cardRank);
    return convertedCardRank;
}

const hideRoundHeadings = () => {
    roundHeadingDrawEl.classList.add('hidden');
    roundHeadingLoseEl.classList.add('hidden');
    roundHeadingWinEl.classList.add('hidden');
}

const displayRoundWin = () => {
    hideRoundHeadings();
    roundHeadingWinEl.classList.remove('hidden');
    countUpStreak();
}

const displayRoundDraw = () => {
    hideRoundHeadings();
    roundHeadingDrawEl.classList.remove('hidden');
    countUpStreak();
}

const displayRoundLose = () => {
    hideRoundHeadings();
    roundHeadingLoseEl.classList.remove('hidden');
    continueBtn.classList.add('hidden');
}

/**
 * gameJudge - ゲーム勝敗を判定
 * 
 * 流れ
 * - 1.ボタンからHighかlowの二択を判定
 * - 2.プレイヤーの予想を判定
 * - 3.勝敗によりroundHeadingElの文字を変え、classを付与 (resetRoundHeadingClass()の処理後)
 *      - 勝敗判定後 win or draw => count up, lose => no count up (game over), "続ける"ボタンは非表示
 * 
 * @param {string} playerSelectedButtonVal - highかlowボタンの値を取得
 * 
 */
const gameJudge = (playerSelectedButtonVal) => {
    
    let currentPlayerRank = convertCardRank(globalPlayerCardRank);
    let currentDealerRank = convertCardRank(globalDealerCardRank);
    
    // ボタン判定、rank判定
    if (playerSelectedButtonVal === 'low') {
        
        // 判定例）
        // currentPlayerRank = 0 (spade 2)
        // currentDealerRank = 12 (spade A)
        // 0 < 12 = 予想通りなら勝ち（Drawも勝ち）、外れは負け
        if (currentPlayerRank < currentDealerRank) {

            displayRoundWin();
        } else if (currentPlayerRank === currentDealerRank) {

            displayRoundDraw();
        } else {

            displayRoundLose();
        }
    } else if (playerSelectedButtonVal === 'high') {
        
        // 判定例）
        // currentPlayerRank = 12 (spade A)
        // currentDealerRank = 0 (spade 2)
        // 12 > 0 = 予想通りなら勝ち（Drawも勝ち）、外れは負け
        if (currentPlayerRank > currentDealerRank) {

            displayRoundWin();
        } else if (currentPlayerRank === currentDealerRank) {

            displayRoundDraw();
        } else {

            displayRoundLose();
        }
    }
}

const shuffleIndex = () => {
    // splice()でstoredCardDeckから要素を削除するため、storedCardDeck.lengthは自動で調整される
    return Math.floor(Math.random() * storedCardDeck.length);
}

/**
 * updateDealerGameCardAndDealerPlayerRoundCards - shuffleで取得したカード要素のsrcを取得
 * 
 * 流れ
 * - 1.shuffleで取得したカード要素からsrcを取得
 * - 2.src更新で画面と値をリンクさせる
 * - 3.カード画像を反映
 * @param {object} dealerCard - dealerCard object (div.card-wrapper.dealer)
 * @param {object} playerCard - playerCard object (div.card-wrapper.used)
 */
const updateDealerGameCardAndDealerPlayerRoundCards = (dealerCard, playerCard) => {

    // Update image src
    globalDealerCardImgSrc = dealerCard.children[0].src;
    globalPlayerCardImgSrc = playerCard.children[0].src;

    // Update Card image
    dealerCardImgList.forEach(img  => {
        img.src = globalDealerCardImgSrc;
    })
    playerCardImgEl.src = globalPlayerCardImgSrc;
}

/**
 * updateGlobalCardRanks - 取得したsrcからカードランクの抜き取り
 * - 例）http://127.0.0.1:5500/high-and-low/src/images/club/club2.png
 *      - 上記club2の「2」を抜出す
 */
const updateGlobalCardRanks = () => {

    // (\d+) = 数字だけ全検索
    // (?=.png) = .pngの前の位置（数字）を指定
    //   ・(?=.png)の代わりにこちらでも可 => (?!.*\d) = 直前の数字以外はマッチさせない
    // 参照：https://zenn.dev/usamik26/articles/regex-lookahead
    let dealerCardRank = parseInt(globalDealerCardImgSrc.match(/(\d+)(?=.png)/g));
    let playerCardRank = parseInt(globalPlayerCardImgSrc.match(/(\d+)(?=.png)/g));

    // Update
    globalDealerCardRank = dealerCardRank;
    globalPlayerCardRank = playerCardRank;
}

const isDebug = false;  // Test play用に作成

/**
 * playRound - カードをランダムで表示、ランクの抜き取り、場のカードの表示
 * 
 * 流れ
 * - 1.storedCardDeckの有無を確認し、無いければ処理しない
 * - 2.indexをランダムに取得 (起動時毎回)
 *      - NOTE: 現実では一回シャッフルですが、プログラムなら毎回シャッフルの手間がないので、毎回シャッフルする楽しみを追加出来ればと思い毎回シャッフルさせています。
 * - 3.splice()でカードを一枚(ランダムで)取り出し
 * - 4.取り出したカードからsrcを取得
 * - 5.取り出したカードのsrcを要素に代入して、HTMLへ表示
 * - 6.取り出したカードのsrcからrank(数字)の抜出し (club2 => 2)
 * - 7.抜出したrank(数字)をdealerRank、playerRankへ代入
 * - 8.取り出したカードへclassを付与
 *      - dealerCard -> "dealer" class (場に出ているカードの目印として付与)
 *      - playerCard -> "drawn" (usedにするために付与)
 * - 9.dealerCardに "dealer" classを付与 
 * - 10.playerCardに "used" classを付与(最後のラウンドは不要(残りカード2枚時))
 * - 11.spotDealerCardとspotPlayerCardの値を更新
 */
const playRound = () => {
    if (storedCardDeck && storedCardDeck.length === 0)  {
        console.log('No more card!! GAME OVER')
        // changeDisplayPage(resultPage, gamePage);
        return;
    }

    const [dealerCard] = storedCardDeck.splice(shuffleIndex(), 1);
    const [playerCard] = storedCardDeck.splice(shuffleIndex(), 1);

    if (isDebug) {
        console.log('dealerCard', dealerCard)
        console.log('playerCard', playerCard)
    }

    updateDealerGameCardAndDealerPlayerRoundCards(dealerCard, playerCard);
    updateGlobalCardRanks();

    if (storedCardDeck.length >= 0) {
        dealerCard.classList.add('dealer');
    }
    
    if (storedCardDeck.length > 1) {
        playerCard.classList.add('drawn');
    }

    // Update
    globalDealerCard = dealerCard;
    globalPlayerCard = playerCard;
}

/**
 * addUsedClass - 使ったカード要素に "used" classを付与
 * @param {object} dealerCard - dealerCard object (div.card-wrapper.dealer)
 * @param {object} playerCard - playerCard object (div.card-wrapper.used)
 */
const addUsedClass = (dealerCard, playerCard) => {
    if (!dealerCard || !playerCard) {
        console.log('no card')
        return;
    }

    // 最終ラウンドまで処理 (storedCardDeck = 0 はゲームリセットの為、処理不要)
    if (storedCardDeck.length > 1) {
        dealerCard.classList.remove('dealer');
        playerCard.classList.remove('drawn');

        dealerCard.classList.add('used');
        playerCard.classList.add('used');
    } 
}

/**
 * Reset Game Statement
 * 
 * 初期化時 DEFAULT:
 * - streakCount = 0 
 * - highOrLowTextEl = "" 
 * - div.card-wrapper = default .card-wrapper class
 * - continueBtn = default .btn .btn--continue classes
 * - div.page = default .page class
 * - globalDealerCardRank = 0
 * - globalPlayerCardRank = 0
 * - globalDealerCard = null (clean memory)
 * - globalPlayerCard = null (clean memory)
 * - storedCardDeck = originalDeckCardList (52 length)
 */
const clearGameState = () => {
    streakCountList.forEach(count => count.textContent = 0);
    highOrLowTextEl.textContent = '';

    originalDeckCardList.forEach(cardEl => {
        cardEl.classList.remove('drawn');
        cardEl.classList.remove('dealer');
        cardEl.classList.remove('used');
    })

    continueBtn.classList.remove('hidden');

    if (page.classList.contains('page--result')) {
        page.classList.remove('page--result');
    }

    globalDealerCardRank = 0;
    globalPlayerCardRank = 0;

    globalDealerCard = null;
    globalPlayerCard = null;

    storedCardDeck = Array.from(originalDeckCardList);

    console.log('RELOAD...Initial Deck: ', storedCardDeck.length)
    console.log('Game is cleared')
}


// Events
ruleBtn.addEventListener('click', () => {
    changeDisplayPage(rulesPage, titlePage);
})

backBtn.addEventListener('click', () => {
    changeDisplayPage(titlePage, rulesPage);
})

playBtn.addEventListener('click', () => {
    clearGameState();
    playRound();
    // changeDisplayPage(gamePage, titlePage);
})

homeBtn.addEventListener('click', () => {
    clearGameState();
    // changeDisplayPage(titlePage, gamePage);
})

highLowButtonWrapperEl.addEventListener('click', (clickedButton) => {
    const playerSelectedButtonVal = clickedButton.target.value.toLowerCase();
    
    highOrLowTextEl.textContent = playerSelectedButtonVal.toUpperCase();

    gameJudge(playerSelectedButtonVal);
    addUsedClass(globalDealerCard, globalPlayerCard);

    isEmptyCards() ? continueBtn.classList.add('hidden') : '';
    
    // changeDisplayPage(roundPage, gamePage);
})

continueBtn.addEventListener('click', () => {
    playRound();
    // changeDisplayPage(gamePage, roundPage);
})

resultBtn.addEventListener('click', () => {
    page.classList.add('page--result');

    // changeDisplayPage(resultPage, roundPage);
})

retryBtn.addEventListener('click', () => {
    clearGameState();
    playRound();
    // changeDisplayPage(gamePage, resultPage);
})

titleBtn.addEventListener('click', () => {
    clearGameState();
    // changeDisplayPage(titlePage, resultPage);
})


// 読み込み時に初期化
window.addEventListener('DOMContentLoaded', () => {
    clearGameState();

    rulesPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    roundPage.classList.remove('hidden');
    resultPage.classList.remove('hidden');
    titlePage.classList.remove('hidden');
})