var a = document.querySelectorAll(".course-card");

$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 4
            }
        }
    });

    $("#cta-btn").click(function () {
        window.location.replace("../1/index.html");
    });
});

