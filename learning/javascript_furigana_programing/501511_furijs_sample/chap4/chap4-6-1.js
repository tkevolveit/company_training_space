// メールを作る関数
let createMail = (recv, bill) => {
    let msg = `${recv}様
PT企画の斉藤です。
今月の請求額は${bill}円です。`;
    console.log(msg);
};
// 手数料を追加する関数
let addCharge = (bill) => {
    return bill * 1.07;
};

// 送付先データ
let data = [
    { name: '山本', bill: 40000, crg: true },
    { name: '吉田', bill: 25000, crg: false },
];
// メール作成実行
for (let rec of data) {
    let bill = rec['bill'];
    if (rec['crg']) {
        bill = addCharge(bill);
    }
    createMail(rec['name'], bill);
}
