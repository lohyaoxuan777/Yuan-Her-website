const games = [
    "typethiswords",
];

let searchbar = document.querySelector(".searchbar");
let searchbtn = document.querySelector(".searchbtn");

searchbtn.addEventListener('click', () => {
    switch (true) {
        case searchbar.value.includes(games[0]):
            console.log(`Searching for: ${searchbar}`);
            location.href = `typethiswords.html`;
        default:
            console.log(`User haven't submited yet.`)
    };
});