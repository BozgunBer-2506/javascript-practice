// Teil 7: find() und findIndex()

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Keyboard', price: 79 },
  { id: 4, name: 'Monitor', price: 299 }
];

console.log("--- Nach ID suchen ---");
const product3 = products.find(p => p.id === 3);
console.log("Produkt 3:", product3);

console.log("\n--- Index finden ---");
const mouseIndex = products.findIndex(p => p.name === 'Mouse');
console.log("Mouse Index:", mouseIndex);

console.log("\n--- Günstiges Produkt finden ---");
const cheapProduct = products.find(p => p.price < 100);
console.log("Günstiges Produkt:", cheapProduct);

console.log("\n--- Nicht gefunden ---");
const notFound = products.find(p => p.id === 99);
console.log("Nicht gefunden:", notFound);

console.log("\n--- find() vs filter() ---");
const numbers = [1, 2, 3, 4, 5];
const firstBig = numbers.find(n => n > 2);
const allBig = numbers.filter(n => n > 2);
console.log("find(n > 2):", firstBig);
console.log("filter(n > 2):", allBig);

console.log("\n--- Rückgabewerte wenn nicht gefunden ---");
console.log("find() nicht gefunden:", numbers.find(n => n > 10));
console.log("findIndex() nicht gefunden:", numbers.findIndex(n => n > 10));
console.log("filter() nicht gefunden:", numbers.filter(n => n > 10));