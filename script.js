function displayAlert() {
    if (event.srcElement.id == winnerId) {
        alert("YOU WIN!");
    } else {
        alert("TRY AGAIN!");
    }
}

var winnerId = Math.floor(Math.random() * 2);