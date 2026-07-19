class Trojkat {
    constructor(wysokosc, podstawa, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa = podstawa;
        this.nazwa = nazwa;
    }

    pole() {
        return (this.podstawa * this.wysokosc) / 2;
    }

    static porownaj(t1, t2) {
        return t1.pole() > t2.pole() ? t1 : t2;
    }
}

const t1 = new Trojkat(4, 6, "T1");
const t2 = new Trojkat(5, 8, "T2");
const t3 = new Trojkat(3, 10, "T3");

console.log(Trojkat.porownaj(t1, t2));