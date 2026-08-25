const table = document.querySelector('table');
const authipt = document.querySelector('#auth');
const bookipt = document.querySelector('#book');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    if (authipt.value && bookipt.value) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerText = authipt.value;
        td2.innerText = bookipt.value;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
});
