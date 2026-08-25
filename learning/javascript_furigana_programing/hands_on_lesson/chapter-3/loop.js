#!/usr/bin/env node

// let fund = 50000;

// while (fund >= 0) {
//     console.log(fund)
//     fund -= 5080;
// }

// 九九の段 Loop
// const MAX_KUKU_DAN = 9;

// for (let i = 1; i <= MAX_KUKU_DAN; i++) {
    
//     console.log(`${i}の段始めます...`);

//     for (let j = 1; j <= MAX_KUKU_DAN; j++) {
//         let calcNum = i * j
//         console.log(`${i} X ${j} = ${calcNum}`)
//     }
//     console.log("\n")
// }


// for of
// let weekdays = ["Mon", "Tue", "Wed", "Thur", "Fri"];

// for (let day of weekdays) {
//     console.log(day)
// }


// Tournament List
// let team = ["A", "B", "C", "D", "E"];
// let opp = ["A", "B", "C", "D", "E"];

// for (let t1 of team) {
//     opp.shift(); // Delete everytime this, avoid AvsA, BvsB, BvsA, and so on
//     for (let t2 of opp) {
//         console.log(t1 + "vs" + t2)
//     }
// }


// Excerise
// let direction = ["東", "西", "南", "北"]

// for (let d of direction) {
//     console.log(d);
// }


let weekdays = ["Mon", "Tue", "Wed", "Thur", "Fri"];

console.log(weekdays)

for (let cnt = weekdays.length - 1; cnt >= 0; cnt--) {
    console.log(weekdays[cnt])
}