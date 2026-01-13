// Teil 11: Object Destructuring

const product = {
  id: 1,
  name: 'Laptop',
  price: 999,
  specs: {
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD'
  }
};

console.log("--- Basic Destructuring ---");
const { id, name, price } = product;
console.log("ID:", id, "Name:", name, "Preis:", price);

console.log("\n--- Properties umbenennen ---");
const { name: productName } = product;
console.log("Produktname:", productName);

console.log("\n--- Standardwerte ---");
const { price: cost, discount = 0 } = product;
console.log("Kosten:", cost, "Rabatt:", discount);

console.log("\n--- Verschachteltes Destructuring ---");
const { specs: { cpu, ram } } = product;
console.log("CPU:", cpu, "RAM:", ram);

console.log("\n--- Funktion mit Destructuring ---");
const formatProduct = ({ name, price }) => {
  return `${name}: ${price} EUR`;
};
console.log("Formatiert:", formatProduct(product));

console.log("\n--- Array von Objects ---");
const users = [
  { name: 'Max', age: 25 },
  { name: 'Anna', age: 30 }
];
const [{ name: firstName }, { name: secondName }] = users;
console.log("Namen:", firstName, secondName);

console.log("\n--- Destructuring mit Rest ---");
const { id: productId, ...rest } = product;
console.log("ID:", productId);
console.log("Rest Keys:", Object.keys(rest));