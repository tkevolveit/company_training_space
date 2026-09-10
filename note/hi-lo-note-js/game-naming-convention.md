# Game Naming convention

### exec or play for continue round game
When naming a method to continue a round in a game, play or playRound is generally the better choice.

In standard object-oriented and game programming, exec (execute) implies running a low-level, system-level, or isolated command-line utility. 

In contrast, play fits the domain language of gaming and makes the code much easier to read.

Here is a breakdown to help you choose the best fit for your specific context:
🎮 Use play (or variations) for Standard Game LogicIf the method handles the core gameplay loop, player turns, or state updates, stick to game-centric terminology.
play() or playRound(): Best if the method kicks off or resumes the main gameplay loop.

resume() or resumeRound(): Best if the game was explicitly paused or saved, and the player is continuing from that exact state.

nextRound(): Best if the previous round just ended, and you are initializing the next one.

⚙️ Use exec for System ActionsOnly use exec or execute if the method behaves like a command pattern or a background system process.

executeCommand(): If the method processes a raw input command from a terminal or network packet.
executeTurn(): If you are building a turn-based engine where "Commands" are queued up and processed by the system backend.

💡 Summary Recommendation
If a developer reads your code, game.playRound() tells them exactly what is happening in natural language. Avoid exec unless you are writing low-level engine architecture

---

## Plural form function naming convention

When writing a function that updates multiple global variables (including one named updateItemsNum), the naming convention depends on the programming language and your project's style guide

🌟 Recommended
Function 
NamesupdateGlobalCounters() (Clear and explicit about modifying global state)
refreshItemMetrics() (Professional and focuses on the outcome)
syncItemTotals() (Good if the variables are being synchronized with a data source)
updateItemState() (Broad but accurate if it handles the overall state of items)

🛠️ Best Practices for Global Variable MutationsAvoid Named Side-Effects: 
Avoid naming a function after only one of the variables it changes 
(e.g., naming it updateItemsNum() when it actually changes three other things). 

This creates hidden side effects that make debugging difficult.

Use Broad but Descriptive Verbs: 
Use prefixes like 
update..., sync..., refresh..., or reset... followed by a plural noun that encapsulates all the modified variables (e.g., Metrics, Stats, State, Counters).

Consider a State Object: Modifying multiple loose global variables can make code fragile. It is often better to group those variables into a single global configuration or state object.


### Side effect
A side effect in programming occurs when a function or expression modifies some state outside of its local environment or interacts with the outside world, rather than simply returning a value.

- functionでUIを更新する影響