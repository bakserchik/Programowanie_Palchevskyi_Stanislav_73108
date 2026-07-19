let liczba2 = Math.floor(Math.random() * 101);
let proby2 = 0;

function sprawdz() {
  let val = parseInt(document.getElementById("inp").value);
  proby2++;

  if (val < liczba2) console.log("Za mała");
  else if (val > liczba2) console.log("Za duża");
  else {
    alert("Brawo! Próby: " + proby2);
    location.reload();
  }
}