// Announce invoice email message
let createMail = (client, bill, sender, company ) => {

    let msg = `
        Dear, ${client}

        Here is your billing information for this month from our team.

        Amount due: ${bill}

        Please let us know if you have any questions.Best regards,

        Best regards,
        ${sender}/${company}
    `;

    console.log(msg);
}

// Calc tax
let addCharge = (bill) => {
    return bill * 1.07;
}

let clients = [
    { name: "John", bill: 4000, isCharge: true },
    { name: "Marry", bill: 4000, isCharge: false },
]

let senders = { name: "Smith", companyName: "abcstreet.co.ltd" }


// Loop mail list
for (let client of clients) {
    let bill = client['bill'];

    if (client[`isCharge`]) {
        bill = addCharge(bill);
    }

    createMail(client['name'], bill, senders['name'], senders['companyName'])
}