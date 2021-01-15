// Esercizio di oggi: Simon Says
// repo/cartella js-simon
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


// Da implementare/migliorare
// - Eliminare random duplicati
// - Validazione input utente
// - usare indexOf nella ricerca dei numeri indovinati perchè più semplice
// - eliminare i console.log()


// FUNZIONI*********************************************************************
function generateRandom(minR, maxR){
  return parseInt((Math.random() * (maxR - minR)) + minR) ;
}

function generaArrayRandom(n, min, max){
  var arr = [];
  var tempRandom;
  for (var i = 0; i < n; i++) {

    // todo: Genera random univoco
    tempRandom = generateRandom(min, max);

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
// FUNZIONI*********************************************************************



$(document).ready(function(){
  // Inizializza variabili
  var timeDisplayms = 30000;    //Tempo di visualizzazione dei numeri
  var arrayNumeriUtente = [];   //Array contenente i numeri inseriti dall'utente
  var nRichiesteInput = 5;      //Quanti numeri deve inserire l'utente
  var arrayNumIndovinati = [];  // Array dei numeri indovinati dall'utente
  var punteggio = 0;            //Equivale a numeri azzeccati
  var nMin = 1, nMax = 100;     //Limiti min e max dei numeri casuali

  // Genera 5 numeri casuali
  var arrayRandom = generaArrayRandom(16,nMin,nMax); //Genera array di 16 numeri random compresi fra 1 e 100



  // Scrivi numeri su pagina html
  $('#lista-numeri').text(printArray(arrayRandom));

  // Disclaimer
  setTimeout(function(){
    $('.disclaimer').fadeOut();
  }, 1000);

  // Mostra lista numeri casuali
  setTimeout(function(){
    $('.numbers').fadeIn();
    $('.countdown-box').fadeIn();
  }, 1000);

  // Avvia countdown
  var counterStart = timeDisplayms/1000;
  var k = 0;
  var counter = setInterval(function(){
    k++;
    $('#countdown').text(counterStart - k);
  },1000);

  // Fai scomparire numeri dopo 30s
  setTimeout(function(){
    $('.numbers').fadeOut();
    clearInterval(counter);
    $('.countdown-box').fadeOut();
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

    // Stampa su pagina HTML
    $('#punteggio').text('Punteggio:' + punteggio);
    $('#numeri-indovinati').text('Numeri indovinati:' + printArray(arrayNumIndovinati ));
    $('.risultati').fadeIn();

  },timeDisplayms + 1000);


  // Stampa a video quanti numeri sono stati indovinati e quali

});
