for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

let wynik = "";
for (let i = 0; i <= 100; i += 5) {
  wynik += i + " ";
}
document.body.innerHTML += "<p>" + wynik + "</p>";

let tekst = "";
for (let i = 0; i <= 100; i++) {
  if (i % 13 === 0) tekst += i + " ";
}
alert(tekst);