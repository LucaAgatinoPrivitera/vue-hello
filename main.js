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
        }
    },
};

const aggiungiImage = {
    img(){
        return
        src: 'src="./cabin.png'
    }
}








// Creo una variabile alla quale assegno Vue.createApp e gli passo configurazione
let app = Vue.createApp(configurazione);
console.log("applicazione inizializzata ma non montata", app);

app.mount('h1'); //funziona esattamente come il querySelector
console.log("Con questo monto e `applico app.mount('h1');`", app);


// Bonus
// Così non funziona, penso che si debba usare :
/*
let image = vue.createApp(aggiungiImage);
image.mount('#img');
*/