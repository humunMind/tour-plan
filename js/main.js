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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке Меню");
    document.querySelector(".navbar-battom").classList.toggle("navbar-battom--visible");
  });
  
  var modalButton = $("[data-toggle=madal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click",openModal);
  closeModalButton.on("click",closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay = addClass(".modal__overlay--visible");
    modalDialog = addClass(".modal__dialog--visible");
  }
  function closeModal() {
    event.preventDufault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay = removeClass(".modal__overlay--visible");
    modalDialog = removeClass(".modal__dialog--visible");
  }
});