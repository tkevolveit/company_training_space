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

// Content data
const highOrLowEl = document.getElementById('high-or-low');
const streakCounts = document.querySelectorAll('.streak-count');

// Internl variables
let dealerRank = 0;
let playerRank = 0;

// Add hidden class at first loading
// 読み込み時にhiddenクラスを付与
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
    streakCounts.forEach(count => {
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
 * gameJudgeはゲームの勝敗を判定する関数
 * @param {*} btnVal highかlowボタンの値が関数に渡ってくる
 * ボタンからHighかlowの二択で判定
 * プレイヤーの予想を比較して判定
 * カードの判定はwin or draw = count up, lose = game over and no count
 * 勝敗によりRound Headingの文字を変え、classを付与
 */
const roundHeading = document.getElementById('round-heading');
const gameJudge = (btnVal) => {
    const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 1];

    // playerRank = 1; // strongest
    // dealerRank = 2;

    let currentPlayerRank = parseInt(playerRank)
    let currentDealerRank = parseInt(dealerRank)

    // Access rank and convert element value to index num
    // rankにアクセスしてcurrentPlayerRankの値をindexに更新し、強さの値をルールに揃える 
    currentPlayerRank = rank.indexOf(currentPlayerRank);
    currentDealerRank = rank.indexOf(currentDealerRank);
    // console.log("player rank: ", currentPlayerRank)
    // console.log("dealer rank: ", currentDealerRank)


    // Test
    // let buttonJudge = "low".toLowerCase();
    let buttonJudge = btnVal;
    
    // 1.buttonJudge
    // 2.playerSelectOption
    if (buttonJudge === "low") {
        // console.log("low")
        
        // Check player's prediction
        // Player's Prediction: LOW
        // Playerの予想がlowの時の処理
        if (currentPlayerRank < currentDealerRank) {
            console.log("win")

            roundHeading.textContent = "win";
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {
            console.log("draw, win")

            roundHeading.textContent = "Draw";
            roundHeading.classList.add("text-pale");
            countUpStreak();
        } else {
            console.log("lose")

            roundHeading.textContent = "Lose";
            roundHeading.classList.add("text-red");
            continueBtn.classList.add("hidden");
            console.log("game over");
        }
    } else if (buttonJudge === "high") {
        // console.log("high")
        
        // Check player's prediction
        // Player's Prediction: HIGH
        // Playerの予想がlowの時の処理
        if (currentPlayerRank > currentDealerRank) {
            console.log("win")

            roundHeading.textContent = "win";
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {
            console.log("draw, win")

            roundHeading.textContent = "Draw";
            roundHeading.classList.add("text-pale");
            countUpStreak();
        } else {
            console.log("lose")

            roundHeading.textContent = "Lose";
            roundHeading.classList.add("text-red");
            continueBtn.classList.add("hidden");
        }
    }
}

/**
 * Card Display and Extract ranks
 * 
 * 
 * add dealer class 
 * add finished class when clicked high or low buttons
 */
// typeof allDeckCards is object
const allDeckCards = document.querySelectorAll('.card-wrapper');
const uniqueDeck = Array.from(allDeckCards);

// For display card spot and round page.
let spotDealerCard;
let spotPlayerCard;

// Update img src
const dealerCardImg = document.querySelectorAll('.dealer-card');
const playerCardImg = document.querySelector('.player-card');
let dealerCardImgSrc = [];
let playerCardImgSrc = [];

let totalCards = uniqueDeck.length;


// Start Random card
const startGame = () => {
    // Check out of cards and game over
    if (uniqueDeck && uniqueDeck.length === 0)  {
        console.log("No more card!! GAME OVER")
        // changeDisplayPage(resultPage, gamePage);
    }

    // クリックのたびにdeckシャッフル
    // Access cards deck
    // Dealer
    // dealerCard = uniqueDeck[shuffleIndex];
    shuffleIndex = Math.floor(Math.random() * uniqueDeck.length);
    const [dealerCard] = uniqueDeck.splice(shuffleIndex, 1);
    // console.log("残りの配列を確認：　", uniqueDeck.length)

    // Check undefined []
    // if (uniqueDeck && uniqueDeck.length > 0) {
    //     console.log(uniqueDeck && uniqueDeck.length > 0);
    // }

    // playerCard = uniqueDeck[shuffleIndex];
    // shuffleで要素を取得したらsrcの更新で画面と値をリンクさせる
    // Update image src
    dealerCardImgSrc = dealerCard.children[0].src;

    // Update Dealer Card Path
    dealerCardImg.forEach(img  => {
        // Update src
        img.src = dealerCardImgSrc;
    })

    
    // Player
    shuffleIndex2 = Math.floor(Math.random() * uniqueDeck.length);
    const [playerCard] = uniqueDeck.splice(shuffleIndex2, 1);
    // console.log("残りの配列を確認2： ", uniqueDeck.length)

    // Update image
    playerCardImgSrc = playerCard.children[0].src;
    playerCardImg.src = playerCardImgSrc;


    // CARD RANK
    // Extract card rank from src
    // http://127.0.0.1:5500/projects/high-and-low-javascript/high-and-low/src/images/club/club2.png
    // club2 => 2
    // (\d+) = 数字だけ全検索
    // (?!.*\d)/) = 直前の数字以外はマッチさせない
    // 参照：https://zenn.dev/usamik26/articles/regex-lookahead
    let dealerCardRank = parseInt(dealerCardImgSrc.match(/(\d+)(?!.*\d)/g));
    let playerCardRank = parseInt(playerCardImgSrc.match(/(\d+)(?!.*\d)/g));

    // Update global variables
    dealerRank = dealerCardRank;
    playerRank = playerCardRank;

    // console.log("dealer rank", dealerCardRank, dealerRank)
    // console.log(playerCardRank, playerCardRank)


    // Add dealer class after using the card
    dealerCard.classList.add('dealer')
    
    // Pending -> finished after clicking high or low
    if (uniqueDeck.length > 1) {
        playerCard.classList.add('used')
    }

    // Update global variables both dealer and player spot cards
    spotDealerCard = dealerCard;
    spotPlayerCard = playerCard;
    // console.log("spot dealer", spotDealerCard);
    // console.log("spot player", spotPlayerCard);

    // console.log("d", dealerCard)
    // console.log("p", playerCard)

    // Check totalCards length
    // console.log("total", totalCards)
    // console.log("total unique: ", uniqueDeck)
    console.log("Remaining Cards: ", uniqueDeck.length)
}

// Last round no need to add class
const addFinishedClass = (dealerCard, playerCard) => {
    // Add finished class to used card
    if (uniqueDeck.length > 1) {
        // Dealer
        dealerCard.classList.remove('dealer');
        dealerCard.classList.add('finished');
        // console.log("spot", spotDealerCard);
        
        // Player
        playerCard.classList.remove('used');
        playerCard.classList.add('finished');
        // console.log("spot", spotPlayerCard);
    } 
}

/**
 * Reset Game Statement
 * DEFAULT STATEMENT:
 * - streakCount = 0 
 * - roundHeading = 'Enjoy!🏋 <- Any text ok user never see this.
 * - highOrLowEl = '🍋🍇🍐🥑🍔🍜' <- Any text ok user never see this.
 * - div.card-wrapper = only card-wrapper class
 * - continueBtn = remove hidden class
 * - uniqueDeck needs to be reassign allDeckCards as array since it has destroy the element by splice(). Restore is important for retry game.
 */
const clearGameState = () => {
    streakCounts.forEach(count => count.textContent = 0);
    roundHeading.textContent = 'Enjoy!🏋';
    highOrLowEl.textContent = '🍋🍇🍐🥑🍔🍜';

    allDeckCards.forEach(cardEl => {
        // console.log(cardEl)
        cardEl.classList.remove("used")
        cardEl.classList.remove("dealer")
        cardEl.classList.remove("finished")
        // console.log(cardEl)
    })

    continueBtn.classList.remove("hidden")

    const uniqueDeck = Array.from(allDeckCards);
    console.log("RELOAD...Initial Deck: ", uniqueDeck.length)
    // console.log(allDeckCards);

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
    const btnVal = e.target.value.toLowerCase();

    // Check No card to hide continueBtn
    if (uniqueDeck && uniqueDeck.length === 0) {
        console.log("last round", uniqueDeck.length)
        continueBtn.classList.add("hidden")
    }

    changeHighOrLowSpanContent(e)
    addFinishedClass(spotDealerCard, spotPlayerCard);
    gameJudge(btnVal);
    // changeDisplayPage(roundPage, gamePage);
})

lowBtn.addEventListener('click', (e) => {
    const btnVal = e.target.value.toLowerCase();
    
    // Check No card
    if (uniqueDeck && uniqueDeck.length === 0) {
        console.log("last round", uniqueDeck.length)
        continueBtn.classList.add("hidden")
    }

    changeHighOrLowSpanContent(e)
    addFinishedClass(spotDealerCard, spotPlayerCard);
    gameJudge(btnVal);

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
    page.classList.remove('page--result');
    
    clearGameState();
    // changeDisplayPage(gamePage, resultPage);
})

titleBtn.addEventListener('click', () => {
    page.classList.remove('page--result');

    clearGameState();
    // changeDisplayPage(titlePage, resultPage);
})



// Test space