$(function () {
	let mobileNavTrigger = $('.menu-btn');
	let mobileNav = $('.header-mobile-navigation');
	mobileNavTrigger.on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			mobileNav.addClass('active');
			$('body').addClass('no-scroll-mobile');
			$('.header-top').addClass('shadow');
			$(".header-input-search").slideUp();
			$('.header-top-tel-btn-search').toggleClass("open-search");
		} else {
			$(this).removeClass('active');
			mobileNav.removeClass('active');
			$('body').removeClass('no-scroll-mobile');
			$('.mobile-navigation-sub-position').removeClass('active current');
		}
	});

	let mobileNavParent = $('.mobile-navigation-menu .is-parent > a');
	let mobileNavBack = $('.mobile-navigation-sub-menu-heading > a');
	mobileNavParent.on('click', function (e) {
		e.preventDefault();
		let current = $(this).next('.mobile-navigation-sub-position');
		$('.mobile-navigation-sub-position').scrollTop('0').removeClass('current');
		current.addClass('active current');
	});
	mobileNavBack.on('click', function (e) {
		e.preventDefault();
		$(this).closest('.mobile-navigation-sub-position').removeClass('active current');
		$(this).closest('.mobile-navigation-sub-position.active').addClass('current');
	});
	$(".header-top-tel-btn-search").on("click", function () {
		if (
			!$(".header-top-tel-btn-search").hasClass("open-search") &&
			$(".header-mobile-navigation").hasClass("active")
		) {
			$(".header-mobile-navigation").removeClass('active')
			$(".mobile-navigation-trigger").removeClass("active");
			$(".mobile-navigation-sub-position").removeClass("active current");
			$(".menu-btn").removeClass("active");
			$("body").removeClass("no-scroll-mobile");
		}
		$(this).toggleClass("open-search");
		$(".header-input-search").slideToggle();
	});

	//   $(".masked-phone").inputmask({
	// 	mask: "+7 (999) 999-99-99",
	// 	clearIncomplete: true,
	// 	showMaskOnHover: false,
	//   });
	$(window).on("scroll", function () {
		var height = $(document).scrollTop().valueOf();
		/*Если сделали скролл на 50px задаём новый класс для header*/
		if (height >= 160) {
			$("header").addClass("sticky");
		} else {
			/*Если меньше 50px удаляем класс для header*/
			$("header").removeClass("sticky");
		}
	});

	const swiper = new Swiper('.promo-product-slider', {
		// Optional parameters
		slidesPerView: 1,
		spaceBetween: 30,
		slidesPerGroup: 1,
		// If we need pagination
		pagination: {
			el: '.promo-product-slider .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + 0 +  (index + 1) + '</span>';
			},

		},

		// Navigation arrows
		navigation: {
			nextEl: '.promo-product .swiper-button-next',
			prevEl: '.promo-product .swiper-button-prev',
		},
	});
});
