$(document).ready(function () {	
	//Высота блоков эквивалентна ширине
	$(".whole").outerHeight($(".height-point").outerWidth());
	$(".half").outerHeight($(".height-point").outerWidth()/2-5);
	if($(window).width() > 1279) {
		$(".news-article").outerHeight($(".height-point").outerWidth()*6+50);
	}
	$(window).resize(function(){
		$(".whole").outerHeight($(".height-point").outerWidth());
		$(".half").outerHeight($(".height-point").outerWidth()/2-5);
		if($(window).width() > 1279) {
			$(".news-article").outerHeight($(".height-point").outerWidth()*6+50);
		} else {
			$(".news-article").css("height", "auto");
		}
	});
	//end "Высота блоков эквивалентна ширине"
});