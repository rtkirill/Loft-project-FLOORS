$(document).ready(function () {	
	//Высота блоков эквивалентна ширине
	$(".whole").outerHeight($(".height-point").outerWidth());
	$(".half").outerHeight($(".height-point").outerWidth()/2-5);
	$(window).resize(function(){
		$(".whole").outerHeight($(".height-point").outerWidth());
		$(".half").outerHeight($(".height-point").outerWidth()/2-5);
	});
	//end "Высота блоков эквивалентна ширине"
});