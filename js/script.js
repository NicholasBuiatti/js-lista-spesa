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

//prendo il pulsante add dal documento
const addBtn = document.getElementById('add');


//catturo un evento click
addBtn.addEventListener('click', function(){
    //prendo il valore inserito dall'utente a ogni click nell'input dell'aggiunta
    const addItem = document.getElementById('addItem').value;
    //pusho il valore nella lista
    list.push(addItem);
    console.log(list);

    //controllo se l'item è nella lista
    //se non c'è lo aggiungo alla lista
    if (list.includes(addItem)) {
        myUl.innerHTML += `
        <li class='text-warning'>
            ${addItem}
        </li>    
        `
    }

})


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
