// Teil 4: Array Destructuring

const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log(`x=${x}, y=${y}, z=${z}`);

console.log("\n--- Elemente überspringen ---");
const rgb = [255, 128, 0];
const [red, , blue] = rgb;
console.log(`Rot: ${red}, Blau: ${blue}`);

console.log("\n--- Rest-Operator ---");
const data = ['Kopfzeile', 'Inhalt1', 'Inhalt2', 'Inhalt3', 'Fußzeile'];
const [header, ...middle] = data;
console.log("Kopfzeile:", header);
console.log("Mitte:", middle);

console.log("\n--- Standardwerte ---");
const arr = ['a'];
const [first, second = 'standard'] = arr;
console.log(first, second);

console.log("\n--- Variablen tauschen ---");
let var1 = 5;
let var2 = 10;
[var1, var2] = [var2, var1];
console.log("Nach Tausch:", var1, var2);