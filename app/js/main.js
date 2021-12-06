$(function () {
  let mobileNavTrigger = $(".menu-btn");
  let mobileNav = $(".header-mobile-navigation");
  mobileNavTrigger.on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      mobileNav.addClass("active");
      $("body").addClass("no-scroll-mobile");
      $(".header-top").addClass("shadow");
      $(".header-input-search").slideUp();
      $(".header-top-tel-btn-search").removeClass("open-search");
    } else {
      $(this).removeClass("active");
      mobileNav.removeClass("active");
      $("body").removeClass("no-scroll-mobile");
      $(".mobile-navigation-sub-position").removeClass("active current");
    }
  });

  let mobileNavParent = $(".mobile-navigation-menu .is-parent > a");
  let mobileNavBack = $(".mobile-navigation-sub-menu-heading > a");
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
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
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
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },
    },

    navigation: {
      nextEl: ".promo-product .swiper-button-next",
      prevEl: ".promo-product .swiper-button-prev",
    },
  });
  const breakpoint = window.matchMedia("(min-width: 767px)");

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function () {
    mySwiper = new Swiper(".danger-items-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".danger-items-container .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
        },
      },
    });
  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
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
  $('.file-upload').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $(this).closest('.file-upload-wrapper').find('.filename').html(filename);
    
});
});
