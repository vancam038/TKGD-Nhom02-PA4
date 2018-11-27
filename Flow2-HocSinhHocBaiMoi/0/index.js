$(document).ready(function () {
    $(".custom-card").hover(function () {
        $(this).find(".card-body").removeClass("red-card red-gradient").addClass("blue-card blue-gradient");
    }, function () {
        $(this).find(".card-body").removeClass("blue-card blue-gradient").addClass("red-card red-gradient");
    });

    $("#learn-new").click(() => {
        window.location.replace("../1/index.html");
    });
});