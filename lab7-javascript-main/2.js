const student = {
    imie: "Jan",
    nazwisko: "Kowalski",
    album: "12345",
    oceny: [4, 5, 3],

    srednia() {
        let suma = this.oceny.reduce((a, b) => a + b, 0);
        return suma / this.oceny.length;
    }
};

console.log("Średnia:", student.srednia());