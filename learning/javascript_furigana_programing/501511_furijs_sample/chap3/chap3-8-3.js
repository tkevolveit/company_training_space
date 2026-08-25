let team = ['A', 'B', 'C', 'D', 'E'];
let opps = ['A', 'B', 'C', 'D', 'E'];
for (let t1 of team) {
    opps.shift();
    for (let t2 of opps) {
        console.log(t1 + 'vs' + t2);
    }
}
