/* 
Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.

Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.

Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€

L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24

Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
*/


// Per i codici promozionali uso un array
let discountCodeAvailable = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


// Dichiaro la funzione del Form
function submitForm(event) {
    event.preventDefault();

    console.log("il form funziona!");



    let hoursOfWork = parseInt(document.getElementById("inputHours").value);
    let typeOfWork = parseInt(document.getElementById("inputType").value);
    let discountCode = document.getElementById("inputDiscount").value;

    // Ora inserisco la condizione del prezzo con l'orario
    let totalPrice = 0;

    switch (typeOfWork) {
        case 1:
            // Backend Development price
            totalPrice = hoursOfWork * 20.5;
            break;

        case 2:
            // Frontend Development price
            totalPrice = hoursOfWork * 15.3;
            break;

        case 3:
            // Project Analyst price
            totalPrice = hoursOfWork * 33.6;
            break;
    }


    // Uso i codici promozionali per applicare gli sconti (se ce ne sono)
    let code = false;
    for (let i = 0; i < discountCodeAvailable.length; i++) {
        if (discountCodeAvailable[i] === discountCode) {
            code = true;
            break;
        }

    }

    // Se il codice promozionale non è valido, il sito informerà l'utente
    if (discountCode != "" && !code) {
        alert("Il codice inserito non è valido!");
    }

    // Se il codice promozionale è valido, verrà applicato un ulteriore sconto del 25%

    if (code) {
        totalPrice = totalPrice * 0.75;

    }


    // Inserisco il prezzo nell'HTML
    document.getElementById("price_result").innerHTML = "Il prezzo totale è di: €" + totalPrice.toFixed(2);



}