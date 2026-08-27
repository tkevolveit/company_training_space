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

// Content
const highOrLowEl = document.getElementById('high-or-low');

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

highBtn.addEventListener('click', (e) => {
    changeHighOrLowSpanContent(e)
    changeDisplayPage(roundPage, gamePage);
})

lowBtn.addEventListener('click', (e) => {
    changeHighOrLowSpanContent(e)
    changeDisplayPage(roundPage, gamePage);
})

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

/**
 * 
 * @param {*} showEl 表示したいページが対象で受け取る
 * @param {*} hideEl 隠したいページが対象で受け取る
 */
const changeDisplayPage = (showEl, hideEl) => {
    console.log('show: ', showEl);
    console.log('hide: ', hideEl);

    // クリックしてclassの付けけ外し
    showEl.classList.remove('hidden');
    hideEl.classList.add('hidden')

    // if (showEl.classList.contains('hidden')) {
    //     showEl.classList.remove('hidden');
    //     hideEl.classList.add('hidden')
    // }   
}

window.addEventListener('DOMContentLoaded', () => {
    rulesPage.classList.add('hidden');
    // gamePage.classList.add('hidden');
    roundPage.classList.add('hidden');
    resultPage.classList.add('hidden');
    titlePage.classList.add('hidden');
})


/**
 * 
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
