const book = {
    title: "Wiedźmin",
    author: "Andrzej Sapkowski",
    year: 1993
};

function infoBook(book) {
    return `${book.title} - ${book.author} (${book.year})`;
}

console.log(infoBook(book));