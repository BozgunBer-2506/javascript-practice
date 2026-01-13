// Teil 9: Objects - Schlüssel-Wert-Paare

console.log("--- Object erstellen ---");
const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  year: 2008,
  available: true
};

console.log("Titel:", book.title);
console.log("Autor:", book['author']);

console.log("\n--- Property Shorthand ---");
const title = 'Clean Code';
const author = 'Robert C. Martin';
const year = 2008;
const bookShort = { title, author, year, available: true };
console.log("Buch Shorthand:", bookShort);

console.log("\n--- Verschachtelte Objects ---");
const library = {
  name: 'Stadtbibliothek',
  address: {
    street: 'Hauptstraße 1',
    city: 'Berlin',
    zip: '10115'
  },
  books: [book, bookShort]
};

console.log("Stadt:", library.address.city);
console.log("Erstes Buch:", library.books[0].title);

console.log("\n--- Dynamischer Zugriff ---");
const propertyName = 'title';
console.log(book[propertyName]);

console.log("\n--- Properties hinzufügen und ändern ---");
const user = { name: 'Max' };
user.age = 25;
user['email'] = 'max@example.com';
console.log("User:", user);