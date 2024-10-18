const games = ["Save the People on Earth"]
const gameCodeEdition = ["save-the-people-on-earth"]
let searchbar = document.querySelector(".searchbar");
let searchbtn = document.querySelector(".searchbtn");

let urlParams = new URLSearchParams(window.location.search);

urlParams.forEach((value, name) => {
    if (!name == "search") {
        console.log("Hasn't submit the form yet.");
    } else {
        if (!gameCodeEdition.includes(value)) {
            console.error("Did this user hack us?");
            alert("Sorry, we don't have this game.");
        } else if (gameCodeEdition[0].includes(value)) {
            console.log("Searching for " + value);
            location.href = "savethepeopleonearth.html";
        }
    }
});