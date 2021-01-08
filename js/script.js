$(document).ready(function(){

  $('.next').click(pulsanteNext); //funzione di callback che parte dopo il click
  
  $('.prev').click(pulsantePrev);


  // cambio l'immagine corrispondente al cliccare sui pallini
  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    $('.images img.active').removeClass('active');
  }); //da finire.....


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