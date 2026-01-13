// Teil 2: Basis Array-Methoden

const colors = ['rot', 'grün', 'blau'];
console.log("Initial:", colors);

colors.push('gelb');
console.log("Nach push:", colors);

colors.unshift('schwarz');
console.log("Nach unshift:", colors);

colors.pop();
console.log("Nach pop:", colors);

console.log("Enthält 'grün':", colors.includes('grün'));
console.log("Index von 'rot':", colors.indexOf('rot'));
console.log("Index von 'gelb':", colors.indexOf('gelb'));

console.log("\nFinales Array:", colors);