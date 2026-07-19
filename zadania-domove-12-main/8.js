let a2 = parseInt(prompt("Podaj pierwszą liczbę:"));
let b2 = parseInt(prompt("Podaj drugą liczbę:"));

while (b2 !== 0) {
  let temp = b2;
  b2 = a2 % b2;
  a2 = temp;
}

console.log("NWD:", a2);