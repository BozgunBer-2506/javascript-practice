// Teil 3: Spread Operator für Arrays (immutable)

const original = [1, 2, 3];
const copy1 = original;
const copy2 = [...original];

original.push(4);
console.log("Original:", original);
console.log("Flache Kopie:", copy2);
console.log("Referenz-Kopie:", copy1);

console.log("\n--- Arrays kombinieren ---");
const fruits = ['Apfel', 'Birne'];
const vegetables = ['Karotte', 'Brokkoli'];
const food = [...fruits, ...vegetables];
console.log("Kombiniert:", food);

console.log("\n--- Elemente hinzufügen ---");
const items = ['a', 'b', 'c'];
const moreFruits = [...items, 'd'];
console.log("Anhängen:", moreFruits);
console.log("Original unverändert:", items);

const withBanane = ['Banane', ...items];
console.log("Voranstellen:", withBanane);

console.log("\n--- In der Mitte einfügen ---");
const withX = [...items.slice(0, 2), 'X', ...items.slice(2)];
console.log("In der Mitte:", withX);