const names = ["Jan", "Anna", "Piotr", "Kasia", "Tomek"];
const surnames = ["Nowak", "Kowalski", "Wiśniewski", "Mazur", "Kaczmarek"];

const users = [];

for (let i = 0; i < 20; i++) {
    users.push({
        name: names[Math.floor(Math.random() * names.length)],
        surname: surnames[Math.floor(Math.random() * surnames.length)],
        age: Math.floor(Math.random() * 46) + 5,
        phone: Math.floor(Math.random() * 3000001) + 5000000
    });
}

console.log(users); 