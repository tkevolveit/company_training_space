let moji = prompt('年齢は？');
let age = parseInt(moji);
if (age < 18) {
    console.log('未成年');
} else if (age < 65) {
    console.log('成人');
} else {
    console.log('高齢者');
}
