// Teil 8: Methoden Verkettung

const employees = [
  { name: 'Max', department: 'IT', salary: 60000, active: true },
  { name: 'Anna', department: 'HR', salary: 55000, active: true },
  { name: 'Tom', department: 'IT', salary: 70000, active: false },
  { name: 'Lisa', department: 'IT', salary: 65000, active: true },
  { name: 'Ben', department: 'Sales', salary: 50000, active: true }
];

console.log("--- Aktive IT-Mitarbeiter ---");
const activeIT = employees
  .filter(e => e.active)
  .filter(e => e.department === 'IT')
  .map(e => e.name);
console.log("Aktive IT:", activeIT);

console.log("\n--- Durchschnittsgehalt aktiver Mitarbeiter ---");
const activeSalaries = employees
  .filter(e => e.active)
  .map(e => e.salary);
const avgSalary = activeSalaries.reduce((sum, s) => sum + s, 0) / activeSalaries.length;
console.log("Durchschnitt Gehalt:", avgSalary);

console.log("\n--- Hochverdiener (> 55000) ---");
const highEarners = employees
  .filter(e => e.salary > 55000)
  .map(e => `${e.name} (${e.department})`);
console.log("Hochverdiener:", highEarners);

console.log("\n--- Sortierte Abteilungen (ohne Duplikate) ---");
const departments = [...new Set(employees.map(e => e.department))].sort();
console.log("Abteilungen:", departments);

console.log("\n--- Komplexes Beispiel ---");
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 29, inStock: true },
  { name: 'Keyboard', price: 79, inStock: false },
  { name: 'Monitor', price: 299, inStock: true }
];

const availableCheap = products
  .filter(p => p.inStock)
  .filter(p => p.price < 500)
  .map(p => p.name)
  .sort();

console.log("Verfügbar & Günstig:", availableCheap);