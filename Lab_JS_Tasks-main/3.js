window.onload = function() {
    let wiek = prompt("Podaj swój wiek:");
    if (parseInt(wiek) < 18) {
        window.location.href = "strona_dla_dzieci.html";
    }
};