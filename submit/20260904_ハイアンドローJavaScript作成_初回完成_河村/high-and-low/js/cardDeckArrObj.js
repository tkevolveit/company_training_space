const SUITS = ['heart', 'spade', 'diamond', 'club']; 

// Initialize cards
const cardArrObj = [];

for (const suit of SUITS) {
    console.log("Create card: ", suit);
  
    for (let rank = 1; rank <= 13; rank++) {
        cardArrObj.push({
              id: `${suit}-${rank}`,
              suit: `${suit}`,
              cardRank: `${rank}`,
              src: `./images/${suit}/${suit}${rank}.png`,
              isUsed: false,
        })
    }
}

export default { cardArrObj }



// Output like this
// const cards = [
//     {
//         id: "heart-1",
//         suit: "heart",
//         cardRank: 1,
//         src: "./images/heart/heart1.png",
//         isUsed: false,
//     },
//     {
//         id: "heart-2",
//         suit: "heart",
//         cardRank: 2,
//         src: "./images/heart/heart2.png",
//         isUsed: false,
//     },
//     {
//         id: "heart-3",
//         suit: "heart",
//         cardRank: 3,
//         src: "./images/heart/heart3.png",
//         isUsed: false,
//     }
// ];