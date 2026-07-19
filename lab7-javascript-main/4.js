class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

    pole() {
        return ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
    }

    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
}

const tr1 = new Trapez(5, 6, 8, "Trapez1");
const tr2 = new Trapez(4, 10, 12, "Trapez2");
const tr3 = new Trapez(3, 7, 9, "Trapez3");

function wiekszaFigura(trojkat, trapez) {
    if (trojkat.pole() > trapez.pole()) {
        console.log(trojkat.nazwa, trojkat.pole());
    } else {
        console.log(trapez.nazwa, trapez.pole());
    }
}

wiekszaFigura(t1, tr1);