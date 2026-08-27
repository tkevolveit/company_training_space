const keyword = document.querySelector('input');
const btn = document.querySelector('button');
const table = document.querySelector('table');

// https://qiita.com/Akihiro0711/items/bd84743d9a3c8ae01f16
const callApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonplaceData = await res.json();

    jsonplaceData.forEach(e => {
        console.log(e)

        const b = e;
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        td1.innerText = b.name;
        td2.innerText = b.email;

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    })
    
    console.log(jsonplaceData.name)
}

btn.addEventListener('click', callApi)