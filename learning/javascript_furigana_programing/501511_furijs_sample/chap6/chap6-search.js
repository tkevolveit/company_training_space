const keyword = document.querySelector('input');
const btn = document.querySelector('button');
const callApi = async () => {
    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    url.searchParams.set('q', keyword.value);
    const res = await fetch(url);
    const books = await res.json();
    console.log(books);
};
btn.addEventListener('click', callApi);
