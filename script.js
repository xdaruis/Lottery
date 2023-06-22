const buttonsNum = 3;
const winnerId = Math.floor(Math.random() * buttonsNum);

function displayAlert() {
    if (event.srcElement.id == winnerId) {
        alert("YOU WIN!");
    } else {
        alert("TRY AGAIN!");
    }
}
