// Teil 10: Spread Operator für Objects (immutable)

const user = {
  name: 'Max',
  email: 'max@example.com',
  settings: {
    theme: 'light',
    notifications: true
  }
};

console.log("--- Object kopieren ---");
const userCopy = { ...user };
console.log("Kopie:", userCopy);

console.log("\n--- Email aktualisieren (immutable) ---");
const updatedEmail = { ...user, email: 'neuemail@example.com' };
console.log("Neue Email:", updatedEmail.email);
console.log("Original Email:", user.email);

console.log("\n--- Verschachtelte Property aktualisieren ---");
const darkMode = {
  ...user,
  settings: {
    ...user.settings,
    theme: 'dark'
  }
};
console.log("Neues Theme:", darkMode.settings.theme);
console.log("Original Theme:", user.settings.theme);

console.log("\n--- Neue Property hinzufügen ---");
const withAge = { ...user, age: 25 };
console.log("Mit Alter:", withAge);

console.log("\n--- Objects zusammenführen ---");
const defaults = { theme: 'light', language: 'de' };
const prefs = { theme: 'dark' };
const settings = { ...defaults, ...prefs };
console.log("Einstellungen:", settings);

console.log("\n--- Property entfernen ---");
const { email, ...withoutEmail } = user;
console.log("Ohne Email:", withoutEmail);