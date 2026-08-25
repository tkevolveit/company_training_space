let moji = prompt('入力せよ');
if (!isNaN(moji)) {
    console.log(parseInt(moji) + 80);
} else {
    console.log('数字ではない');
}
