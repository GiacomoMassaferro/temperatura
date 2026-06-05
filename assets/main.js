console.log("main.js caricato");

const temperature = [];
for (let i = 0; i < 7; i++) {
    let temperatura = Number(prompt("inserisci la temperatura"));
    temperature.push(temperatura);
}

let massimo = temperature[0];
let minimo = temperature[0];
let somma = Number(0);
let media = 0;

for (let i = 0; i < temperature.length; i++) {
    let minimoTemp = temperature[i];
    let massimoTemp = temperature[i];
    if (minimo > minimoTemp) {
        minimo = minimoTemp;
    }
    if (massimo < massimoTemp) {
        massimo = massimoTemp;
    }
    somma = somma + temperature[i];
}
media = somma / 7;
console.log(temperature);
console.log("la temperatura media è di:", media);