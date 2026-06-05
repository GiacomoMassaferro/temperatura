# esercizio 4
Date le temperature settimanali, trova il valore massimo, il minimo e calcola la media aritmetica delle sette giornate.
## ragionamento
- dichiaro l'array temperature[0,0,0,0,0,0,0];
- PER let i=0; i<=temperature.length;i++
    - let temperatura=Number(prompt("inserisci la temperatura"));
    - temperature.push(temperatura);
- dichiaro la variabile massimo=temperature[0];
- dichiaro la variabile minimo=temperature[0];
- dichiaro la variabile somma=0;
- dichiaro la variabile media=0;
- PER let i=0; i<=temperature.length; i++
    - let minimoTemp=temperature[i];
    - let maxTemp=temperature[i];
    - SE (minimo>minimoTemp)
        - minimo=minimoTemp;
    - SE (massimo<massimoTemp)
        - massimo=massimoTemp;
    - somma= somma+temperature[i];
- media= somma/7;
- stampo l'array delle temperature;
- stampo "la temperatura media è" media;