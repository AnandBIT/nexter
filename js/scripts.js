//jshint esversion:6
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

$(".home__like").css("fill", "#fff");
$(".home__like use").click((event) => {
    let svgColor = event.target.parentNode.style.fill;
    event.target.parentNode.style.fill = svgColor === "rgb(255, 255, 255)" ? "#c69963" : "#fff";
});