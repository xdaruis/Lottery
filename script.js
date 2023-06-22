const winnerId = Math.floor(Math.random() * 3);

function displayAlert() {
    if (event.srcElement.id == winnerId) {
        alert("YOU WIN!");
    } else {
        alert("TRY AGAIN!");
    }
}
