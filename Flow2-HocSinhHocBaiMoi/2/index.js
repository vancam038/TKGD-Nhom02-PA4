$(document).ready(function () {
    $('.brief-wrapper').prop("hidden", false);
    $('.test-wrapper').prop("hidden", true);
    $('.pwp-wrapper').prop("hidden",true);
    $('.extra-wrapper').prop("hidden",true);
    $('.support-wrapper').prop("hidden",true);

    $("#btn-back").click(() => {
        window.location.replace("../1/index.html");
    });

    $("#test-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#test-card-body").addClass("arrow_box");
        $('.brief-wrapper').prop("hidden",true);
        $('.test-wrapper').prop("hidden", false);
        $('.pwp-wrapper').prop("hidden",true);
        $('.extra-wrapper').prop("hidden",true);
        $('.support-wrapper').prop("hidden",true);
    })

    $("#brief-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#brief-card-body").addClass("arrow_box");
        $('.brief-wrapper').prop("hidden",false);
        $('.test-wrapper').prop("hidden", true);
        $('.pwp-wrapper').prop("hidden",true);
        $('.extra-wrapper').prop("hidden",true);
        $('.support-wrapper').prop("hidden",true);
    })

    $("#pwp-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#pwp-card-body").addClass("arrow_box");
        $('.brief-wrapper').prop("hidden",true);
        $('.test-wrapper').prop("hidden", true);
        $('.pwp-wrapper').prop("hidden", false);
        $('.extra-wrapper').prop("hidden",true);
        $('.support-wrapper').prop("hidden",true);
    })

    $("#extra-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#extra-card-body").addClass("arrow_box");
        $('.brief-wrapper').prop("hidden",true);
        $('.test-wrapper').prop("hidden", true);
        $('.pwp-wrapper').prop("hidden",true);
        $('.extra-wrapper').prop("hidden", false);
        $('.support-wrapper').prop("hidden",true);
    })

    $("#support-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#support-card-body").addClass("arrow_box");
        $('.brief-wrapper').prop("hidden",true);
        $('.test-wrapper').prop("hidden", true);
        $('.pwp-wrapper').prop("hidden",true);
        $('.extra-wrapper').prop("hidden",true);
        $('.support-wrapper').prop("hidden",false);
    })
});