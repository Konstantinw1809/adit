$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header").toggleClass("active");
  }),
    $(".header__menu").click(function (event) {
      $(".header__burger, .header__menu").removeClass("active");
      $("body").removeClass("lock");
      $(".header").removeClass("active");
    });
});
