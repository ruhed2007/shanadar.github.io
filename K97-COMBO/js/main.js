(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

//let toggle = document.getElementById("darkmode");

//toggle.addEventListener("click", () => {
//document.body.classList.toggle("dark");
//});

//var openModalButtons = document.querySelectorAll("[data-modal-target]");
//var closeModalButtons = document.querySelectorAll("[data-close-button]");
//var overlay = document.getElementById("overlay");

//openModalButtons.forEach((button) => {
  //button.addEventListener("click", () => {
   // const modal = document.querySelector(button.dataset.modalTarget);
   /// openModal(modal);
  //});
//});

///overlay.addEventListener("click", () => {
 // const modals = document.querySelectorAll(".modal.active");
  //modals.forEach((modal) => {
 //   closeModal(modal);
 // });
//});

//closeModalButtons.forEach((button) => {
 // button.addEventListener("click", () => {
 //   const modal = button.closest(".modal");
 //   closeModal(modal);
 // });
//});

//function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
//}

//function closeModal(modal) {
//  if (modal == null) return;
 // modal.classList.remove("active");
 // overlay.classList.remove("active");
//}
