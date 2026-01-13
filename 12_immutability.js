// Teil 12: Immutability (wichtig für React!)

let todos = [
  { id: 1, text: 'Lernen', done: false },
  { id: 2, text: 'Üben', done: false },
  { id: 3, text: 'Anwenden', done: true }
];

let user = {
  name: 'Max',
  preferences: { theme: 'light', language: 'de' }
};

console.log("=== ARRAY IMMUTABILITY ===\n");

console.log("--- Todo hinzufügen (immutable) ---");
const newTodos1 = [...todos, { id: 4, text: 'Wiederholen', done: false }];
console.log("Nach Hinzufügen:", newTodos1.length);
console.log("Original:", todos.length);

console.log("\n--- Todo entfernen (immutable) ---");
const newTodos2 = todos.filter(t => t.id !== 2);
console.log("Nach Entfernen:", newTodos2.length);
console.log("Original:", todos.length);

console.log("\n--- Todo aktualisieren (immutable) ---");
const newTodos3 = todos.map(t =>
  t.id === 1 ? { ...t, done: true } : t
);
console.log("Todo 1 erledigt:", newTodos3[0].done);
console.log("Original Todo 1:", todos[0].done);

console.log("\n=== OBJECT IMMUTABILITY ===\n");

console.log("--- Verschachtelte Property aktualisieren ---");
const newUser = {
  ...user,
  preferences: {
    ...user.preferences,
    theme: 'dark'
  }
};
console.log("Neues Theme:", newUser.preferences.theme);
console.log("Original Theme:", user.preferences.theme);

console.log("\n=== FALSCHE MUSTER (Nicht tun!) ===\n");

console.log("--- Arrays mutieren (FALSCH) ---");
const items = [1, 2, 3];
items.push(4);
console.log("Mutierte Items:", items);

console.log("\n--- Objects mutieren (FALSCH) ---");
const person = { name: 'Max', age: 25 };
person.age = 26;
console.log("Mutierte Person:", person);

console.log("\n=== KORREKTE MUSTER ===\n");

console.log("--- Neue Arrays erstellen ---");
const items2 = [1, 2, 3];
const newItems = [...items2, 4];
console.log("Neue Items:", newItems);
console.log("Original Items:", items2);

console.log("\n--- Neue Objects erstellen ---");
const person2 = { name: 'Max', age: 25 };
const newPerson = { ...person2, age: 26 };
console.log("Neue Person:", newPerson);
console.log("Original Person:", person2);
