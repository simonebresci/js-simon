// Esercizio di oggi: Simon Says
// repo/cartella js-simon
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.



// TODO: Eliminare random duplicati

function generateRandom(minR, maxR){
  return parseInt((Math.random() * (maxR - minR)) + minR) ;
}

function generaArrayRandom(n, min, max){
  var arr = [];
  var tempRandom;
  for (var i = 0; i < n; i++) {

    // todo: Genera random univoco
    tempRandom = generateRandom(min, max);
    // do{
    //   tempRandom = generateRandom(min, max);
    // }while(arr.indexOf(tempRandom) <= 0)

    arr.push(tempRandom);
    // arr.push(Math.random * 100);  // Da 0 a 100
  }
  return arr;
}

function printArray(arrayToPrint){
  var printString = '';

  for (var i = 0; i < arrayToPrint.length; i++) {
    printString += arrayToPrint[i] + ' ';
  }

  return printString;
}




$(document).ready(function(){
  // Inizializza variabili
  var timeDisplayms = 5000; //Tempo di visualizzazione dei numeri
  var arrayNumeriUtente = [];
  var nRichiesteInput = 5;  //Numero di richieste di input all'utente
  var arrayNumIndovinati = [];
  var punteggio = 0;          //Equivale a numeri azzeccati
  // Genera 5 numeri casuali
  var arrayRandom = generaArrayRandom(16,1,100); //Genera array di 16 numeri random compresi fra 1 e 100

  // Scrivi numeri su pagina html
  $('#lista-numeri').text(printArray(arrayRandom));

  // Fai scomparire numeri dopo 30s
  setTimeout(function(){
    $('.numbers').fadeOut();
  },timeDisplayms);

  setTimeout(function(){
    // Chiedi ad utente di inserire numeri che ricorda
    for (var x = 0; x < nRichiesteInput; x++) {
      arrayNumeriUtente[x] = parseInt(prompt('Inserisci numero:'));
    }

    // Calcola punteggio
    for (var z = 0; z < arrayRandom.length; z++) {
      for (var y = 0; y <arrayNumeriUtente.length; y++) {
        if(arrayNumeriUtente[y] === arrayRandom[z]){
          alert('elemento trovato');
          arrayNumIndovinati.push(arrayRandom[z]);
          punteggio++;
        }
      }
    }


    //Stampa punteggio
    console.log('Punteggio :' + punteggio);
    if(punteggio > 0){
      console.log('Numeri indovinati :' + printArray(arrayNumIndovinati ));
    }

  },timeDisplayms + 1000);


  // Stampa a video quanti numeri sono stati indovinati e quali

});
