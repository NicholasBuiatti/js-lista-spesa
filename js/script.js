//creazione array
const list = ['latte', 'uova', 'pane', 'pomodori', 'insalata', 'marmellata'];
console.log(list);

//creazione ciclo for
// for (let i = 0; i < list.length; i++) {
//     //salvo l'elemento per ogni incremento in una costante
//     const item = list[i];
//     console.log(i, item);
// }

let myUl = document.querySelector('ul');

//creazione ciclo while
//creazione variabile contatore
let counter = 0
//imposto la condizione fino a quando fuziona
while (counter < list.length) {
    //salvo in una variabile l'elemento
    const item = list[counter];
    console.log(counter, item);

    myUl.innerHTML += `
    <li class='text-warning'>
        ${item}
    </li>    
    `
    //incremento il contatore
    counter++;
}
//resetto il contatore (per un futuro)
counter = 0;