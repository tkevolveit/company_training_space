let createMail = (recv, bill) => {
    let msg = `${recv}様
PT企画の斉藤です。
今月の請求額は${bill}円です。`;
    console.log(msg);
};
createMail('山本', 40000);
