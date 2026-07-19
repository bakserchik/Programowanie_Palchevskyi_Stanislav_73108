let liczba = Math.floor(Math.random() * 101);
let proby = 0;
let guess;

do {
  guess = parseInt(prompt("Zgadnij liczbę 0-100:"));
  proby++;

  if (guess < liczba) console.log("Za mała");
  else if (guess > liczba) console.log("Za duża");

} while (guess !== liczba);

alert("Brawo! Liczba prób: " + proby);  