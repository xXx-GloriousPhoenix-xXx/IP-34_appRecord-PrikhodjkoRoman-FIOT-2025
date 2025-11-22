const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const executeTask_1_9 = () => {
    const tagToCountMap = tweets.reduce((acc, tweet) => {
        tweet.tags.forEach(tag => {
            if (!acc[tag]) {
                acc[tag] = 0;
            }
            acc[tag] += 1;
        });
        return acc;
    }, {});

    console.log(tagToCountMap);
}

document.getElementById("task-1-9").addEventListener("click", executeTask_1_9);