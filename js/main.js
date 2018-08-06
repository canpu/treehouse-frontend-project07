const animationTime = 500;
const $alertSlide = $(".alert__slide");
const $alertIcon = $(".icon__alert");

$alertSlide.click(function () {
  $alertSlide.slideUp(animationTime);
});

$alertIcon.click(function () {
  $alertSlide.slideDown(animationTime);
});
