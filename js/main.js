$(document).ready(function(){
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-swiper__button--next',
      prevEl: '.hotel-swiper__button--prev',
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
      loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    console.log("Клик по кнопке Меню НОвый");
    $(".navbar-battom").toggleClass("navbar-battom--visible");
  });
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click',openModal);
  closeModalButton.on('click',closeModal);

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
  $(".form").each(function() {
    $(this).validate({
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "Имя должно быть не короче 2 букв",
        },
        email: {
          required: "Укажите email",
          email: "Ваш email должен быть в формате name@domain.com"
        },
        phone: {
          required: "Телефон обязателен",
        },
      },
    });
  });
});