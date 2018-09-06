/*Убирает шапку полсе нажатия*/
$('.navbar-nav a').on('click', function() {
    if ($('.navbar-toggle').css('display') != 'none') {
    $(".navbar-toggle").trigger("click");
}
});
/*---------*/
/*Скрол до якоря*/
 
$(document).ready(function(){
	$("#navi").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
/*---------*/