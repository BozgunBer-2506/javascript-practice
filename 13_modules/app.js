import { add, multiply } from './math.js';
import fetchData, { BASE_URL, API_KEY } from './api.js';

console.log("=== Named Imports ===");
console.log("add(2, 3):", add(2, 3));
console.log("multiply(4, 5):", multiply(4, 5));

console.log("\n=== Direct Calculate ===");
const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 29 }
];
const total = products.reduce((sum, item) => sum + item.price, 0);
console.log("Total:", total);

console.log("\n=== API Config ===");
console.log("BASE_URL:", BASE_URL);
console.log("API_KEY:", API_KEY);

console.log("\n***ES6 MODULES FUNKTIONIERT***");