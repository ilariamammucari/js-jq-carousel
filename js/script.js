$(document).ready(function(){

  $('.next').click(pulsanteNext); //funzione di callback che parte dopo il click

  // immagini scorrono verso destra con freccetta di destra
  $('body').keydown(function(e){
    if (e.keyCode === 39){
      pulsanteNext();
    }
  });

  
  $('.prev').click(pulsantePrev);
  // immagini scorrono verso sinistra con freccetta di sinistra
  $('body').keydown(function(e){
    if (e.keyCode === 37){
      pulsantePrev();
    }
  });


  // cambio l'immagine corrispondente al cliccare sui pallini
  $('.nav i').click(function(){
    $('.nav i').removeClass('active');
    $(this).addClass('active');


    //BONUS: .index() senza nulla tra parentesi salva l'indice dell'elemento selezionato e lo metto in una variabile che mi servirà per cercare lo stesso indice per l'immagine, alla quale assegnerò la classe 'active'
    var indicePallino = $(this).index(); 
    $('.images img').removeClass('active');
    $('.images img').eq(indicePallino).addClass('active');

  });


});










// ****funzioni
function pulsanteNext(){

  // in questo modo non capisce più quale immagine è attiva
  // $('.images img.active').removeClass('active');
  // $('.images img.active').next().addClass('active');
  
  var imgAttiva = $('.images img.active');
  console.log(imgAttiva);
  //è importante usare la variabile

  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}



function pulsantePrev(){

  var imgAttiva = $('.images img.active');

  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  var pallinoAttivo = $('.nav i.active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  if(imgAttiva.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}