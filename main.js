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









// Creo una variabile alla quale assegno Vue.createApp e gli passo configurazione
let app = Vue.createApp(configurazione);
console.log("applicazione inizializzata ma non montata", app);

app.mount('h1'); //funziona esattamente come il querySelector
console.log("Con questo monto e `applico app.mount('h1');`", app);


// Bonus
const aggiungiImage = {
    img(){
        return
        imgUrl = 'src="./cabin.png'
    }
}

let image = vue.createApp(aggiungiImage);
// Così non funziona, penso che si debba usare :
/*
image.mount('#img');
*/
image.mount('img');

let immagine = vue.createApp(aggiungiImage);
immagine.mount("img");



/* manco così
const aggiungiImage = {
    img(){
        return
        imgUrl: require('src="./cabin.png');
    }
}
*/