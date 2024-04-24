//creazione array
const list = ['latte', 'uova', 'pane', 'pomodori', 'insalata', 'marmellata'];

//creazione ciclo for
for (let i = 0; i < list.length; i++) {
    //salvo l'elemento per ogni incremento in una costante
    const item = list[i];
    console.log(i, item);
}