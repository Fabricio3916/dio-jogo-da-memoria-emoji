const emoji = [
    "🐱‍🐉",
    "🐱‍🐉",
    "🎶",
    "🎶",
    "😎",
    "😎",
    "🐱‍🏍",
    "🐱‍🏍",
    "🐱‍🚀",
    "🐱‍🚀",
    "🎁",
    "🎁",
    "🎉",
    "🎉",
    "🎂",
    "🎂"
];
let openCards = [];

let shuffleEmojis = emoji.sort(() =>(Math.random() > 0.5) ? 2 : -1);