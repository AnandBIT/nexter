//jshint esversion:6
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

// Dynamic year display
$(".copyright span").text(new Date().getFullYear());

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

// Initialisation of AOS library
AOS.init({
    offset: 100
});