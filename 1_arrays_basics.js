// Teil 1: Arrays erstellen und zugreifen

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

console.log("Erste:", languages[0]);
console.log("Letzte:", languages.at(-1));
console.log("Anzahl:", languages.length);

const mixed = ['Hallo', 42, true, null];
console.log("Mixed:", mixed);

const fruits = ['Apfel', 'Birne', 'Orange'];
console.log("Mit .at(-1):", fruits.at(-1));
console.log("Mit [-1]:", fruits[-1]);

const numbers = [10, 20, 30, 40, 50];
console.log("Element bei Index 2:", numbers[2]);
console.log("Letztes Element:", numbers.at(-1));
console.log("Vorletztes:", numbers.at(-2));