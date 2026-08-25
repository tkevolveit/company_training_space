let moji = prompt('年齢は？');
if (!isNaN(moji)) {
    let age = parseInt(moji);
    if (age < 18) {
        console.log('未成年');
        if (age >= 6 && age <= 15) {
            console.log('(義務教育)');
        }
    } else if (age < 65) {
        console.log('成人');
    } else {
        console.log('高齢者');
    }
}
