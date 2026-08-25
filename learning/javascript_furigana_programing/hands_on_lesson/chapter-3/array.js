#!/usr/bin/env node

let videoStore = [
    'Oldest video', 
    '2 Oldest video', 
    'popular video',
    'Splice video',
    'A number one video',
]


let checkTotalVideos = videoStore.length;
console.log("Shop store vidoes: ", checkTotalVideos)

// Arrival video
videoStore.push("New Arrival video!!!")
console.log(videoStore);

// Waste video
let replaceVideos = videoStore.splice(0, 2, "video1", "hideo 2")
console.log(replaceVideos)
console.log(`Now, older videos are replaced: `, videoStore)

// Video1 is demo, so I need to shift
videoStore.shift();
console.log(videoStore)

let sortVideo = videoStore.sort();
console.log(sortVideo)