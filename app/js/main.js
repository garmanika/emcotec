$(function () {
	$(".menu-btn").on("click", function() {
		$(".header-bottom").fadeToggle();
		$(".menu-btn").toggleClass("open-menu");
		$(".header-wrapper").toggleClass("open-menu");
		$("body").toggleClass("noscroll");
});
});
