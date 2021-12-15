$(function () {
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
    if  (window.matchMedia('(max-width: 991px)').matches && height >= 0 ) {
      $(".header").addClass("sticky");
     }
		  else if (height >= 160) {
       $(".header").addClass("sticky");
     }
    else {
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
        return '<span class="' + className + '"><span class="number">' + 0 + (index + 1) + "</span></span>";
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

  //
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
  $('.file-upload').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $(this).closest('.file-upload-wrapper').find('.filename').html(filename).addClass('selecte');

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
		}
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
		}
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
		}
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
});
