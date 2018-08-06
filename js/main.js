const animationTime = 500;
const $alertSlide = $(".alert__slide");

$alertSlide.click(function () {
  $alertSlide.slideUp(animationTime);
});
