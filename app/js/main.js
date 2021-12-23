$(function () {
  $.fn.extend({
    toggleText: function (a, b) {
      return this.text(this.text() == b ? a : b);
    },
  });
  let mobileNavTrigger = $(".menu-btn");
  let mobileNav = $(".header-mobile-navigation");
  mobileNavTrigger.on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      mobileNav.addClass("active");
      $("body").addClass("no-scroll-mobile");
      $(".header-input-search").fadeOut();
      $(".header-top-tel-btn-search").removeClass("open-search");
    } else {
      $(this).removeClass("active");
      mobileNav.removeClass("active");
      $("body").removeClass("no-scroll-mobile");
      $(".mobile-navigation-sub-position").removeClass("active current");
    }
  });

  let mobileNavParent = $(".mobile-navigation-menu .is-parent > a");
  let mobileNavBack = $(".mobile-navigation-sub-menu-heading");
  mobileNavParent.on("click", function (e) {
    e.preventDefault();
    let current = $(this).next(".mobile-navigation-sub-position");
    $(".mobile-navigation-sub-position").scrollTop("0").removeClass("current");
    current.addClass("active current");
  });
  mobileNavBack.on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".mobile-navigation-sub-position")
      .removeClass("active current");
    $(this)
      .closest(".mobile-navigation-sub-position.active")
      .addClass("current");
  });

  $(".header-top-tel-btn-search").on("click", function () {
    if (
      !$(".header-top-tel-btn-search").hasClass("open-search") &&
      $(".header-mobile-navigation").hasClass("active")
    ) {
      $(".header-mobile-navigation").removeClass("active");
      $(".mobile-navigation-trigger").removeClass("active");
      $(".mobile-navigation-sub-position").removeClass("active current");
      $(".menu-btn").removeClass("active");
      $("body").removeClass("no-scroll-mobile");
    }
    $(this).toggleClass("open-search");
    $(".header-input-search").fadeToggle();
  });

  $(".masked-phone").inputmask({
    mask: "+7 (999) 999-99-99",
    clearIncomplete: true,
    showMaskOnHover: false,
  });

  $(window).on("scroll", function () {
    var height = $(document).scrollTop().valueOf();
    if (height >= 160) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  const swiper = new Swiper(".promo-product-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
      el: ".promo-product-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '"><span class="number">' +
          0 +
          (index + 1) +
          "</span></span>"
        );
      },
    },
    navigation: {
      nextEl: ".promo-product .swiper-button-next",
      prevEl: ".promo-product .swiper-button-prev",
    },
  });

  const breakpoint = window.matchMedia("(min-width: 767px)");

  let mySwiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    mySwiper = new Swiper(".danger-items-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".danger-items-container .swiper-pagination",
        clickable: true,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();

  $(".up").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });

  $(".file-upload").change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $(this)
      .closest(".file-upload-wrapper")
      .find(".filename")
      .html(filename)
      .addClass("selecte");
  });

  const Swiper1 = new Swiper(".project-detail-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,

    pagination: {
      el: ".project-detail-slider-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".project-detail-slider .swiper-button-next",
      prevEl: ".project-detail-slider .swiper-button-prev",
    },
  });

  const Swiper2 = new Swiper(".project-detail-used-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,

    pagination: {
      el: ".project-detail-used-slider-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".project-detail-used-slider .swiper-button-next",
      prevEl: ".project-detail-used-slider .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  });

  const Swiper3 = new Swiper(".catalog-section-photo-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,

    pagination: {
      el: ".catalog-section-photo-slider-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".catalog-section-photo-slider .swiper-button-next",
      prevEl: ".catalog-section-photo-slider .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  });

  const Swiper4 = new Swiper(".catalog-section-example-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,

    pagination: {
      el: ".catalog-section-example-slider-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".catalog-section-example-inner .swiper-button-next",
      prevEl: ".catalog-section-example-inner .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
  });

  const Swiper5 = new Swiper(".catalog-detail-product-slider-thumbs", {
    spaceBetween: 15,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const Swiper6 = new Swiper(".catalog-detail-product-slider", {
    spaceBetween: 15,
    navigation: {
      nextEl: ".catalog-detail-product-slider .swiper-button-next",
      prevEl: ".catalog-detail-product-slider .swiper-button-prev",
    },
    pagination: {
      el: ".catalog-detail-product-slider-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: Swiper5,
    },
  });

  const Swiper7 = new Swiper(".clients-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,

    pagination: {
      el: ".clients-slider .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".clients-slider .swiper-button-next",
      prevEl: ".clients-slider .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
    },
  });

  $(".answers-item-title").on("click", function (e) {
    $(this).closest(".answers-item").toggleClass("open");
    $(this).siblings(".answers-item-info").slideToggle();
  });

  $(".tags-all").on("click", function () {
    $(".tags").toggleClass("filled");
  });
  $(".quiz-contol-hide").on("click", function () {
    $(".quiz-contol-hide span").toggleText("СКРЫТЬ КВИЗ", "ПОКАЗАТЬ КВИЗ");
    $(".quiz-contol-hide").toggleClass("on");
    $(".quiz").toggleClass("hide");
    $(".quiz-contol-btns").toggle();
    $(".quiz-inner").toggle();
  });
	
  $(".quiz-contol-apply").on("click", function () {
    let $current = $(".quiz-panel.active");
    
		if($('.quiz-panel.active .web-check input').is(':checked')){
			 $current.next(".quiz-panel").addClass("active");
			 $current.removeClass("active");
		}
		else if($('.quiz-panel.active .web-check input').length == 0){
			$current.next(".quiz-panel").addClass("active");
			$current.removeClass("active");
		}
		else{
			$('.quiz-contol-apply').addClass('no-enable');
		}
   
    if (!$current.next(".quiz-panel").get(0)) {
      $(".quiz-panel:first-child").addClass("active");
    }
		checkButtonApplay();
		checkBtnQuiz();
  });
	$(".quiz-panel.active .web-check input").on("click", function (){
		checkButtonApplay();
	})
  $(".quiz-contol-cancel").on("click", function () {
    let $current = $(".quiz-panel.active");
    $current.removeClass("active");

    $current.prev(".quiz-panel").addClass("active");
    if (!$current.prev(".quiz-panel").get(0)) {
      $(".quiz-panel:last-child").addClass("active");
    }
		checkButtonApplay();
		checkBtnQuiz();
  });

  $(".catalog-items-box .control-more").on("click", function () {
    $(this).closest(".catalog-items-box ").removeClass("crowded");
  });

  $(".catalog-section-mob-table .control-more").on("click", function () {
    $(this).closest(".catalog-section-mob-table").removeClass("crowded");
  });
  $(".quiz-promo-inner .btn").on("click", function () {
    $(".quiz").toggle();
    $(".quiz-promo").toggle();
  })

  $(".catalog-items").each(function (indx, el) {
    if ($(".catalog-item", el).length > 4) {
      $(this).closest(".catalog-items-box").addClass("crowded");
    } else {
      $(this).closest(".catalog-items-box").removeClass("crowded");
    }
  });

  $(".catalog-section-mob-table-items").each(function (indx, el) {
    if ($(".catalog-section-mob-table-item", el).length > 3) {
      $(this).closest(".catalog-section-mob-table").addClass("crowded");
    } else {
      $(this).closest(".catalog-section-mob-table").removeClass("crowded");
    }
  });
  $('.catalog-detail-product-control .about-short-titles-link').on('click', function(event) {
    event.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,
        easing: "linear"
    });

    return false;
});

  checkTagsHeight();
  $(window).resize(checkTagsHeight);
  checkBtnQuiz();
	checkButtonApplay();
});

function checkTagsHeight() {
  let wasOpend = $(".tags").hasClass("filled");
  $(".tags").removeClass("filled");
  let showAllButton =
    $(".tags-items").height() > $(".tags-items-inner").height();
  if (window.matchMedia("(max-width: 1199px)").matches && showAllButton) {
    if (wasOpend) {
      $(".tags").addClass("filled");
    }
    $(".tags-all").addClass("show");
  } else {
    $(".tags-all").removeClass("show");
  }
}

 function checkBtnQuiz() {
   if ($(".quiz-panel:first-child").hasClass("active")) {
     $(".quiz-contol-cancel").addClass("no-show");
     $(".quiz-contol-order").addClass("no-show");
   } else {
     $(".quiz-contol-cancel").removeClass("no-show");
     $(".quiz-contol-order").removeClass("no-show");
   }
	 if ($(".quiz-panel:last-child").hasClass("active")) {
		$(".quiz-contol-order").removeClass("no-show");
		$(".quiz-contol-apply").addClass("no-show");
	} else {
		$(".quiz-contol-order").addClass("no-show");
		$(".quiz-contol-apply").removeClass("no-show");
	}

 }
 function checkButtonApplay(){
	if($('.quiz-panel.active .web-check input').is(':checked')){
		$('.quiz-contol-apply').removeClass('no-enable');
 }
 else if($('.quiz-panel.active .web-check input').length == 0){
	$('.quiz-contol-apply').removeClass('no-enable');
 }
 else{
	 $('.quiz-contol-apply').addClass('no-enable');
 }
 }

