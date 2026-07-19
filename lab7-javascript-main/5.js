function obiektDoJSON(obj) {
    return JSON.stringify(obj, (key, value) =>
        value === undefined ? undefined : value
    );
}

const dane = {
    imie: "Jan",
    wiek: 20,
    miasto: undefined
};

console.log(obiektDoJSON(dane));