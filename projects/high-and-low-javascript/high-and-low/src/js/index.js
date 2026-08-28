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
const streakCounts = document.querySelectorAll('[data-streak-count]');
const playerRank = document.querySelector('[data-player-rank]');
const dealerRank = document.querySelector('[data-dealer-rank]');

// Add hidden class at first loading
// 読み込み時にhiddenクラスを付与
window.addEventListener('DOMContentLoaded', () => {
    rulesPage.classList.add('hidden');
    // gamePage.classList.add('hidden');
    // roundPage.classList.add('hidden');
    resultPage.classList.add('hidden');
    titlePage.classList.add('hidden');
})


/**
 * changeDisplayPageはページ切り替えの関数
 * @param {*} showEl 表示したいページの対象を受け取る
 * @param {*} hideEl 隠したいページの対象を受け取る
 */
const changeDisplayPage = (showEl, hideEl) => {
    // console.log('show: ', showEl);
    // console.log('hide: ', hideEl);

    // クリックしてclassの付けけ外し
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
 * 
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
 * count.dataset.streakCount = string
 */
const countUpStreak = () => {
    streakCounts.forEach(count => {
        // Convert String to number
        let currentCount = parseInt(count.dataset.streakCount);

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
 * カードの判定はwin, draw = count up, lose = game over, no count
 */
const gameJudge = (btnVal) => {
    let currentPlayerRank = parseInt(playerRank.dataset.playerRank)
    let currentDealerRank = parseInt(dealerRank.dataset.dealerRank)    
    
    // Test
    // let buttonJudge = "low".toLowerCase();
    let buttonJudge = btnVal;
    
    // 1.buttonJudge
    // 2.playerSelectOption
    if (buttonJudge === "low") {
        console.log("low")
        
        // Check player's prediction
        // Player's Prediction: LOW
        if (currentPlayerRank < currentDealerRank) {
            console.log("win")
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {
            console.log("draw, win")
            countUpStreak();
        } else {
            console.log("lose")
            console.log("game over");
        }
    } else if (buttonJudge === "high") {
        console.log("high")
        
        // Check player's prediction
        // Player's Prediction: HIGH
        if (currentPlayerRank > currentDealerRank) {
            console.log("win")
            countUpStreak();
        } else if (currentPlayerRank === currentDealerRank) {
            console.log("draw, win")
            countUpStreak();
        } else {
            console.log("lose")
        }
    }
}

// Switch pages - SPA
// Title -> Rules
ruleBtn.addEventListener('click', () => {
    changeDisplayPage(rulesPage, titlePage);
})

// 
backBtn.addEventListener('click', () => {
    changeDisplayPage(titlePage, rulesPage);
})

playBtn.addEventListener('click', () => {
    changeDisplayPage(gamePage, titlePage);
})

homeBtn.addEventListener('click', () => {
    changeDisplayPage(titlePage, gamePage);
})

// highBtn.addEventListener('click', (e) => {
//     const btnVal = e.target.value.toLowerCase();
    
//     changeHighOrLowSpanContent(e)
//     changeDisplayPage(roundPage, gamePage);

//     gameJudge(btnVal);
// })

// lowBtn.addEventListener('click', (e) => {
//     const btnVal = e.target.value.toLowerCase();
    
//     changeHighOrLowSpanContent(e)
//     changeDisplayPage(roundPage, gamePage);
    
//     gameJudge(btnVal);
// })

continueBtn.addEventListener('click', () => {
    changeDisplayPage(gamePage, roundPage);
})

resultBtn.addEventListener('click', () => {
    page.classList.add('page--result');
    changeDisplayPage(resultPage, roundPage);
})

retryBtn.addEventListener('click', () => {
    page.classList.remove('page--result');
    changeDisplayPage(gamePage, resultPage);
})

titleBtn.addEventListener('click', () => {
    page.classList.remove('page--result');
    changeDisplayPage(titlePage, resultPage);
})




// Test
highBtn.addEventListener('click', (e) => {
    const btnVal = e.target.value.toLowerCase();

    gameJudge(btnVal);
})
