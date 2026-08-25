const keyword = document.querySelector('input');
const btn = document.querySelector('button');
const table = document.querySelector('table');
const callApi = async () => {
    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    url.searchParams.set('q', keyword.value);
    const res = await fetch(url);
    const books = await res.json();
    for (const book of books.items) {
        const b = book.volumeInfo;
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerText = b.title;
        td2.innerText = b.publisher;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
};
btn.addEventListener('click', callApi);
