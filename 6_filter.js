// Teil 6: Array.filter() - Filtern

const users = [
  { name: 'Max', age: 25, active: true },
  { name: 'Anna', age: 17, active: true },
  { name: 'Tom', age: 32, active: false },
  { name: 'Lisa', age: 28, active: true },
  { name: 'Ben', age: 16, active: true }
];

console.log("--- Nur aktive ---");
const activeUsers = users.filter(u => u.active);
console.log("Aktiv:", activeUsers.map(u => u.name));

console.log("\n--- Nur Erwachsene (>= 18) ---");
const adults = users.filter(u => u.age >= 18);
console.log("Erwachsene:", adults.map(u => u.name));

console.log("\n--- Aktiv UND Erwachsen ---");
const activeAdults = users.filter(u => u.active && u.age >= 18);
console.log("Aktive Erwachsene:", activeAdults.map(u => u.name));

console.log("\n--- Name beginnt mit 'A' ---");
const startsWithA = users.filter(u => u.name.toLowerCase().startsWith('a'));
console.log("Beginnt mit A:", startsWithA.map(u => u.name));

console.log("\n--- Alter zwischen 20 und 30 ---");
const twenties = users.filter(u => u.age >= 20 && u.age <= 30);
console.log("Alter 20-30:", twenties.map(u => u.name));

console.log("\n--- Zahlen filtern ---");
const nummern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = nummern.filter(n => n % 2 === 0);
const odd = nummern.filter(n => n % 2 !== 0);
console.log("Gerade:", even);
console.log("Ungerade:", odd);