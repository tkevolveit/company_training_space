
const elem = document.querySelector('p');

// elem.innerText = 'JavaScriptで書く';

const input = document.querySelector('input');

// EventListner
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    elem.innerText = input.value;
})



// callback function

const getText = document.getElementById('get-text');
const replaceText = document.getElementById('replace-text');
const txtArea = document.querySelector('textarea');
const replaceBtn = document.getElementById('replaceBtn');

replaceBtn.addEventListener('click', () => {
    const findText = getText.value;
    const rText = replaceText.value;
    let txtAreaVal = txtArea.value;
    txtAreaVal = txtAreaVal.replaceAll(findText, rText);

    const newEl = document.createElement('p');
    newEl.innerText = txtAreaVal;
    document.body.appendChild(newEl)
})



const addDataBtn = document.getElementById('add-btn');
const authInput = document.getElementById('auth');
const titleInput = document.getElementById('book');
const table = document.querySelector('table');

addDataBtn.addEventListener('click', () => {
    console.log('cliccked ')
    if (authInput.value && titleInput.value) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerText = authInput.value;
        td2.innerText = titleInput.value;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
})


const adjacentDiv = document.querySelector('.adjacent');

adjacentDiv.addEventListener('click', () => {
    const p = document.querySelector('.adjacent p');
    p.insertAdjacentHTML("afterend", "beforeBegin")
})