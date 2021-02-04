//jshint esversion:6
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

/* Store the data in LocalStorage */

const getFav = JSON.parse(window.localStorage.getItem("FAV"));

let prevItem = getFav;
let favourites = [];

if (prevItem)
    favourites = [...prevItem];
else
    favourites = [];

for (let i = 0; i < $(".home__like").length; i++)
    $(".home__like")[i].id = i;

$(".home__like use").click((event) => {
    const currentID = JSON.parse(event.target.parentNode.id);

    $("#" + currentID).toggleClass("marked");

    if (event.target.parentNode.classList.contains("marked")) {
        // if (!favourites.includes(currentID))
        favourites.push(currentID);
    } else {
        favourites = favourites.filter((item, index) =>
            index != favourites.indexOf(currentID)
        );
    }

    window.localStorage.setItem("FAV", JSON.stringify(favourites));
});

if (prevItem) {
    prevItem.forEach((item) => {
        document.getElementById(item).classList.add("marked");
    });
}


/* Use of WayPoint jQuery Plugin to animate on Scroll */

$('.sidebar').waypoint(function (direction) {
    $('.sidebar').addClass('animate__fadeIn');
});

$('.header').waypoint(function (direction) {
    $('.header').addClass('animate__fadeIn');
}, {
    offset: 100
});

$('.realtors').waypoint(function (direction) {
    $('.realtors').addClass('animate__fadeIn');
}, {
    offset: "50%"
});

$('.features').waypoint(function (direction) {
    $('.features').addClass('animate__fadeIn');
}, {
    offset: "50%"
});

$('.story__pictures').waypoint(function (direction) {
    $('.story__pictures').addClass('animate__fadeIn');
}, {
    offset: "80%"
});

$('.story__content').waypoint(function (direction) {
    $('.story__content').addClass('animate__fadeIn');
}, {
    offset: "80%"
});

$('.homes').waypoint(function (direction) {
    $('.homes').addClass('animate__fadeIn');
}, {
    offset: "60%"
});

$('.gallery').waypoint(function (direction) {
    $('.gallery').addClass('animate__fadeIn');
}, {
    offset: "35%"
});

$('.footer').waypoint(function (direction) {
    $('.footer').addClass('animate__fadeIn');
}, {
    offset: "80%"
});