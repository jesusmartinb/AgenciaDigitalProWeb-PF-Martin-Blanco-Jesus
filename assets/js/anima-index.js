// Animaciones con la librería Animate.css V4
if (window.innerWidth > 1919) {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > $(".img01").offset().top - 450) {
			$(".img01").removeClass("hidden").addClass("animate__bounceInLeft");
		};
	
		if ($(window).scrollTop() > $(".img02").offset().top - 450) {
			$(".img02").removeClass("hidden").addClass("animate__bounceInRight");
		};
		
		if ($(window).scrollTop() > $(".text1").offset().top - 450) {
			$(".text1").removeClass("hidden").addClass("animate__bounceInRight");
		};
	
		if ($(window).scrollTop() > $(".text2").offset().top - 450) {
			$(".text2").removeClass("hidden").addClass("animate__bounceInLeft");
		};
	
		if ($(window).scrollTop() > $(".text3").offset().top - 450) {
			$(".text3").removeClass("hidden").addClass("animate__bounceInRight");
		};
	
		if ($(window).scrollTop() > $(".text4").offset().top - 450) {
			$(".text4").removeClass("hidden").addClass("animate__bounceInLeft");
		};
	
		if ($(window).scrollTop() > $(".text5").offset().top - 450) {
			$(".text5").removeClass("hidden").addClass("animate__bounceInRight");
		};
	
		if ($(window).scrollTop() > $(".text6").offset().top - 450) {
			$(".text6").removeClass("hidden").addClass("animate__bounceInLeft");
		};
	});
}