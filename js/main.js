$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-swiper__button--next",
      prevEl: ".hotel-swiper__button--prev",
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    console.log("Клик по кнопке Меню Новый");
    $(".navbar-battom").toggleClass("navbar-battom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    event.preventDefault();
  }
  /* Обработка формы */
  $(".form").each(function () {
    $(this).validate({
      messages: {
        name: {
          required: "Enter a name",
          minlength: "The name must be at least 2 letters long",
        },
        email: {
          required: "Specify email",
          email: "Your email should be in the format name@domain.com",
        },
        phone: {
          required: "Phone is required",
          phone: "Your phone should be in the format phone",
          minlength: "Enter the correct number",
          maxlength: "Enter the correct number"
        },
      },
    });
  });
  AOS.init();
});
