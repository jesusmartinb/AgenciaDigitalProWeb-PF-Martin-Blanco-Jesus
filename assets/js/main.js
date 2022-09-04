$(document).ready(main);

var contador = 1;

function main () {
	$('.header__menu-bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus con animación
	$('.dropdown-menu').addClass('invisible');

	$('.dropdown').on('show.bs.dropdown', function(e){
		$('.dropdown-menu').removeClass('invisible');
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
}

// Transición del color de fondo y color del texto en función de la posición del scroll
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#cambio").offset().top - 50) {
		$(".black").addClass("white").removeClass("black");
	} else {
		$(".white").addClass("black").removeClass("white");
	};
});
