//Importo la funzione "createApp" dalla classe/oggettone "Vue"
const { createApp } = Vue;
// vuol dire ===> const createApp = Vue.createApp;






//Creo un oggetto con la configurazione (i dati) della mia app
const configurazione = {
    //l'oggetto ha una proprietà "data", che è una funzione
    data() {
        //La funzione restituisce un oggetto con tutti i dati
        return {
            testoDaMettere: 'Testo inserito con Vue :D',
            // Bonus
            imgUrl: "./cabin.png"
        }
    },
};









// Creo una variabile alla quale assegno Vue.createApp e gli passo configurazione
let app = Vue.createApp(configurazione);
console.log("applicazione inizializzata ma non montata", app);

app.mount('#container'); //funziona esattamente come il querySelector
console.log("Con questo monto e `applico app.mount('h1');`", app);