//selecionadndo todos os a com # e aplicando uma função nele;
$('.menu a[href^="#"]').on('click', function(e) {
  e.preventDefault();//impedindo que seja enviado
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 700);//aplicando animação
});

$(document).ready(function(){
	if($('.menu').hasClass('show')) {
		$('.menu').removeClass('show');
	}
});

$('.mobile').on('click', function() {
	$('.menu').addClass('show');

	if($('.menu').hasClass('show')) {
		$('.menu').toggle();
	}
});

//removendo o menu após o click
$('.menu a[href^="#"]').on('click', function() {
	$('.menu').removeClass('show');
});