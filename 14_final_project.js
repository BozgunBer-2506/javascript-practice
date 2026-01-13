// Teil 14: Gesamtübung - Produkt-Manager

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
  { id: 2, name: 'Buch', price: 15, category: 'Books', inStock: true },
  { id: 3, name: 'Kopfhörer', price: 89, category: 'Electronics', inStock: false },
  { id: 4, name: 'Tasse', price: 12, category: 'Home', inStock: true },
  { id: 5, name: 'Tastatur', price: 65, category: 'Electronics', inStock: true }
];

console.log("=== FILTER-FUNKTIONEN ===\n");

const getAvailable = (p) => p.filter(x => x.inStock);
const getByCategory = (p, cat) => p.filter(x => x.category === cat);
const getCheap = (p, max) => p.filter(x => x.price < max);

console.log("Verfügbar:", getAvailable(products).map(p => p.name));
console.log("Electronics:", getByCategory(products, 'Electronics').map(p => p.name));
console.log("Unter 50:", getCheap(products, 50).map(p => p.name));

console.log("\n=== TRANSFORMATIONS-FUNKTIONEN ===\n");

const getNames = (p) => p.map(x => x.name);
const applyDiscount = (p, pct) => 
  p.map(x => ({ ...x, price: Math.round(x.price * (1 - pct / 100)) }));

console.log("Alle Namen:", getNames(products));
console.log("\nMit 10% Rabatt:");
const discounted = applyDiscount(products, 10);
discounted.forEach(p => console.log(`  ${p.name}: ${p.price} EUR`));

console.log("\n=== SUCH-FUNKTIONEN ===\n");

const findById = (p, id) => p.find(x => x.id === id);

console.log("Produkt ID 3:", findById(products, 3));
console.log("Produkt ID 99:", findById(products, 99));

console.log("\n=== IMMUTABLE UPDATE-FUNKTIONEN ===\n");

const addProduct = (p, prod) => [...p, prod];
const removeProduct = (p, id) => p.filter(x => x.id !== id);
const updatePrice = (p, id, newPrice) =>
  p.map(x => x.id === id ? { ...x, price: newPrice } : x);

const newProduct = { 
  id: 6, 
  name: 'Monitor', 
  price: 299, 
  category: 'Electronics', 
  inStock: true 
};

const added = addProduct(products, newProduct);
console.log("Nach Hinzufügen:", added.length, "Original:", products.length);

const removed = removeProduct(products, 2);
console.log("Nach Entfernen:", removed.length, "Original:", products.length);

const updated = updatePrice(products, 1, 899);
console.log("Neuer Preis ID 1:", updated.find(p => p.id === 1).price);
console.log("Original Preis ID 1:", products.find(p => p.id === 1).price);

console.log("\n=== KOMPLEXES CHAINING BEISPIEL ===\n");

const employees = [
  { name: 'Max', dept: 'IT', salary: 60000, active: true },
  { name: 'Anna', dept: 'HR', salary: 55000, active: true },
  { name: 'Tom', dept: 'IT', salary: 70000, active: false },
  { name: 'Lisa', dept: 'IT', salary: 65000, active: true }
];

const activeHighEarners = employees
  .filter(e => e.active)
  .filter(e => e.dept === 'IT')
  .filter(e => e.salary > 55000)
  .map(e => `${e.name} (${e.salary} EUR)`)
  .sort();

console.log("Aktive IT Hochverdiener:", activeHighEarners);

console.log("\n✓ ALLE ÜBUNGEN ABGESCHLOSSEN");
