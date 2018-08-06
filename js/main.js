const animationTime = 500;
const $alertSlide = $(".alert__slide");
const $alertIcon = $(".icon__alert");

/* Displaying and Hidding the Alert Message */
$alertSlide.click(function () {
  $alertSlide.slideUp(animationTime);
});

$alertIcon.click(function () {
  $alertSlide.slideDown(animationTime);
});
