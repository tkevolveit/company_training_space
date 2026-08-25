console.log('hello world');

// 1-5-1.js
console.log(10 + 5)
console.log(10 - 5)

// 1-5-2/js
console.log(10 * 5);
console.log(10 / 5);

// 1-6-1.js
console.log(2 + 10 + 5);

// 1-6-2.js
// * > +
console.log(2 + 10 * 5);


// 1-6-3.js
// grouping: () > *
console.log( (2 + 10) * 5)

// 1-6-4.js
console.log(5 / (4 * (1 - 0.2)) )

// console.log(5 / 4 * (1 - 0.2) )
// 1. (1 - 0.2) = 0.8 - grouping is first
// 2. 5 / 4 = 1.25 - * and / are the same precedence, calc left to right
// 3. 1.25 * 0.8 = 1

// 1-7-1.js
let moji = 'Hello';
console.log(moji);


// 1-7-2.j
let price = 100;
let tax = price * 0.1;
console.log(tax);

// 1-7-3.j
let price = 150;
let tax = price * 0.1;
console.log(tax);


// 1-7-4.j
let price = 150;
let tax = price * 0.1;
console.log(tax);

// 1-9-1.js
let moji = prompt('Type any...');
console.log(moji);

// 1-10-1.js
let price = prompt('Type a price');
console.log(price + 80);

// 1-10-1.js
let price = prompt('Type a price');
console.log(price + 80);

// 1-10-2.js
let price = prompt('type a regular price');
console.log(parseInt(price) + 80);

// 1-11-1.js
console.log('Hello', 10, 3.50);