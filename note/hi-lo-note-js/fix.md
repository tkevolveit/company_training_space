# Fix


Currently 
- DOM driven


## Client not required
- DOM driven
- Accept data driven, so JavaScript handle all card deck information
    - Remaining deck (残りのカード)
    - Card Rank (カードのランク)
    - Card status　（カードの状態）
        - Used
        - Unused
    - Card roles
        - Player
        - Dealer
    - Card Image (Optional)




## Integrate DOM to Object data
- Create a card deck Object
- Export it
- Import the card deck in main.js
- Copy it as make it Array object
- Extract card by random index
- Round Card images and spot card image
- Change roles
- Change card state
- Create ramaining card variable
- Converting Card rank


Card element is just added the class

JS keeps the data state

JS -> find HTML element by id -> add bg class -> JS no need to find data from DOM element


Class
Remove Dealer card
If the card status is used then add used class.


I don't need to have globalUpdateRanks if I use map to get the rank.


## Reset
- isUsed
- Role

Use structured