function displayAlert() {
    if (event.srcElement.id == winnerId) {
        alert("YOU WIN!");
    } else {
        alert("TRY AGAIN!");
    }
}

let winnerId = Math.floor(Math.random() * 2);