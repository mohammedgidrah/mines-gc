// Template Name: GamerX
// Template URL: https://uiparadox.co.uk/public/templates/gamerx/v4
// Description:  GamerX - Multipurpose Gaming Html Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.searchToggle();
      Init.quantityHandle();
      Init.billingAddress();
      Init.sizeOptions();
      Init.wishlistButton();
      Init.paymentOption();
      Init.hamburgerMenu();
      Init.countdownInit(".countdown", "2026/06/17");
      Init.videoPlay();
      Init.VideoPlayer();
      Init.colorSelection();
      Init.jsSlider();
      Init.counterActivate();
      Init.achivementCountdown();
      Init.initializeSlick();
      Init.formValidation();
      Init.contactForm();
    },

    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },

    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },

    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2000);
    },

    searchToggle: function () {
      if ($(".search-form").length) {
        $(".search-btn").on("click", function () {
          if ($(".search-form").hasClass("non-active")) {
            $(".search-form").removeClass("non-active");
          } else {
            $(".search-form").addClass("non-active");
          }
          $(this).find("i").toggleClass("fa-search fa-times");
          return false;
        });
      }
    },

    quantityHandle: function () {
      $(".decrement").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        if (qtyVal > 0) {
          qtyInput.val(qtyVal - 1);
        }
      });
      $(".increment").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        qtyInput.val(parseInt(qtyVal + 1));
      });
    },

    wishlistButton: function () {
      if ($(".wishlist-icon").length) {
        $(".wishlist-icon").on("click", function () {
          $(this).find(".fal").toggleClass("fas");
          return false;
        });
      }
    },

    paymentOption: function () {
      if ($(".payment-option").length) {
        $(".payment-option").click(function () {
          $(".payment-option").removeClass("active");
          $(this).addClass("active");
        });
      }
    },

    colorSelection: function () {
      if ($(".colors-selection").length) {
        $(".colors-selection").on("click", function () {
          $(".colors-selection")
            .not(this)
            .find(".non-selected.selected")
            .removeClass("selected");
          $(this).find(".non-selected").toggleClass("selected");
          return false;
        });
      }
    },

    billingAddress: function () {
      if ($("#bill-address").length) {
        $(".billing-address-form").hide();
        $("#bill-address").change(function () {
          if ($(this).is(":checked")) {
            $(".billing-address-form").hide("slow");
          } else {
            $(".billing-address-form").show("slow");
          }
        });
      }
    },

    sizeOptions: function () {
      if ($(".size-options").length) {
        $(".size-options li").click(function () {
          $(".size-options li").removeClass("selected");
          $(this).addClass("selected");
        });
      }
    },

    // Ham Burger Menu
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $(".hamburger-menu").on("click", function () {
          $(".bar").toggleClass("animate");
          $(".mobile-navar").toggleClass("active");
          $(".blur-overlay").toggleClass("active");

          return false;
        });
        $(".has-children").on("click", function () {
          $(this).children("ul").slideToggle("slow", "swing");
          $(".icon-arrow").toggleClass("open");
        });
      }
    },

    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              "<li><h1>%D</h1><h4>Days</h4></li>\
              <li><h1>%H</h1><h4>Hrs</h4></li>\
              <li><h1>%M</h1><h4>Min</h4></li>\
              <li><h1>%S</h1><h4>Sec</h4></li>"
            )
          );
        });
      }
    },

    VideoPlayer: function () {
      if ($("#video").length) {
        $("#video").aksVideoPlayer({
          file: [
            {
              file: "assets/media/videos/video-540.mp4",
              label: "540p",
            },
          ],
          poster: "assets/media/streaming/video-img-large.png",
          forward: true,
        });
      }
    },

    videoPlay: function () {
      $("#videoModal").on("hidden.bs.modal", function () {
        $("#videoModal video").get(0).pause();
      });
      $("#closeVideoModalButton").click(function () {
        $("#videoModal").modal("hide");
      });
    },

    jsSlider: function () {
      if ($(".js-slider").length) {
        $(".js-slider").ionRangeSlider({
          skin: "big",
          type: "double",
          grid: false,
          min: 0,
          max: 100,
          from: 20,
          to: 80,
          hide_min_max: true,
          hide_from_to: true,
        });
      }
    },

    initializeSlick: function (e) {
      if ($(".match-stream-slider").length) {
        $(".match-stream-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "0",
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".best-seller-slider").length) {
        $(".best-seller-slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "0",
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 620,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "0",
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".product-slider").length) {
        $(".product-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "0",
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".image-slider").length) {
        $(".image-slider").slick({
          infinite: true,
          slidesToShow: 10,
          arrows: false,
          autoplay: true,
          cssEase: "linear",
          autoplaySpeed: 0,
          speed: 5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 8,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 6,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 4,
              },
            },
          ],
        });
      }

      if ($(".brands-slider").length) {
        $(".brands-slider").slick({
          infinite: true,
          slidesToShow: 5,
          arrows: false,
          autoplay: true,
          cssEase: "linear",
          autoplaySpeed: 0,
          speed: 5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }

      if ($(".preview-slider").length) {
        $(".preview-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".preview-slider-nav",
        });
      }
      if ($(".preview-slider-nav").length) {
        $(".preview-slider-nav").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: ".preview-slider",
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
          ],
        });
      }
      if ($(".game-stream-slider").length) {
        $(".game-stream-slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "0",
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    },

    // Achivement Counter
    counterActivate: function () {
      $(".counter-count .count").each(function () {
        var $this = $(this);
        var targetValue = parseInt($this.text());
        var startValue = 0; // Your desired start value
        var currentValue = startValue;

        // Set initial value
        $this.text(startValue);

        // Create a custom animation using setInterval
        var duration = 2000; // 2 seconds
        var interval = 50; // Update every 50ms
        var steps = duration / interval;
        var increment = (targetValue - startValue) / steps;
        var stepCount = 0;

        var animationTimer = setInterval(function () {
          stepCount++;
          currentValue = Math.round(startValue + increment * stepCount);

          // Ensure we don't exceed target
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(animationTimer);
          }

          $this.text(currentValue);
        }, interval);
      });
    },

    achivementCountdown: function () {
      var section = document.querySelector(".counter-section");
      var hasEntered = false;
      if (!section) return;

      var initAnimate =
        window.scrollY + window.innerHeight >= section.offsetTop;
      if (initAnimate && !hasEntered) {
        hasEntered = true;
        this.counterActivate();
      }

      window.addEventListener("scroll", (e) => {
        var shouldAnimate =
          window.scrollY + window.innerHeight >= section.offsetTop;

        if (shouldAnimate && !hasEntered) {
          hasEntered = true;
          this.counterActivate();
        }
      });
    },

    formValidation: function () {
      if ($(".form-validator").length) {
        $(".form-validator").validate();
      }
    },

    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "https://websitemakerz.com/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("alert-message").innerHTML =
                  "<h5 class='color-sec mt-16 mb-16'>Email Sent Successfully</h5>";
              } else {
                document.getElementById("alert-message").innerHTML =
                  "<h5 class='color-sec mt-16 mb-16'>There is an error</h5>";
              }
              $("#messages").show("slow");
              $("#messages").slideDown("slow");
              setTimeout(function () {
                $("#messages").slideUp("hide");
                $("#messages").hide("slow");
              }, 4000);
            },
          });
        } else {
          return !1;
        }
      });
    },
  };
  Init.i();
})(window, document, jQuery);
 document.addEventListener('DOMContentLoaded', function() {
    const hideNavBtn = document.getElementById('hide-nav-btn');
    const backToTopBtn = document.querySelector('.back-to-top');
    const headers = document.querySelectorAll('header');
    const heroBanner = document.querySelector('.hero-banner-1 .content');
  
    
    // Toggle navigation and content visibility
    hideNavBtn.addEventListener('click', function() {
      headers.forEach(header => {
        header.style.display = header.style.display === 'none' ? '' : 'none';
      });
      
      if (heroBanner) {
        heroBanner.style.display = heroBanner.style.display === 'none' ? '' : 'none';
      }
      
      // Change icon based on state
      const icon = this.querySelector('i');
      if (headers[0].style.display === 'none') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        this.title = 'Show Navigation';

      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        this.title = 'Hide Navigation';
      }
    });
    
 
    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
        hideNavBtn.style.display = 'none';
      } else {
        backToTopBtn.classList.remove('active');
        hideNavBtn.style.display = 'block';
      }
    });
    
    // Back to top functionality
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
