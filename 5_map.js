// Teil 5: Array.map() - Transformieren

const numbers = [1, 2, 3, 4, 5];
const tripled = numbers.map(n => n * 3);
console.log("Original:", numbers);
console.log("Verdreifacht:", tripled);

console.log("\n--- Strings erstellen ---");
const labeled = numbers.map(n => `Zahl: ${n}`);
console.log(labeled);

console.log("\n--- Aus Objects extrahieren ---");
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 29 },
  { name: 'Keyboard', price: 79 }
];

const productNames = products.map(p => p.name);
console.log("Namen:", productNames);

const formattedPrices = products.map(p => `${p.price} EUR`);
console.log("Preise:", formattedPrices);

console.log("\n--- Objects transformieren (immutable) ---");
const increasedPrices = products.map(p => ({
  ...p,
  price: Math.round(p.price * 1.1)
}));
console.log("Erhöht:", increasedPrices);
console.log("Original:", products);

console.log("\n--- map mit Index ---");
const indexed = numbers.map((n, index) => `[${index}] = ${n}`);
console.log(indexed);