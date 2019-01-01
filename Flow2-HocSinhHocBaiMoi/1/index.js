$(document).ready(function () {
    $("#btn-back").click(() => {
        window.location.replace("../0/index.html");
    });
    $("#btn-cont").click(() => {
        window.location.replace("../2/index1.html");
    });

    $(".subject-panel-inner .card").click(function () {
        $(".subject-panel-inner .card").removeClass("text-white bg-danger")
        $(this).addClass("text-white bg-danger")
    })

    $(".chapter-panel-inner .card").click(function () {
        $(".chapter-panel-inner .card").removeClass("text-white bg-success")
        $(this).addClass("text-white bg-success")
    })

    $(".lesson-panel-inner .card").click(function () {
        $(".lesson-panel-inner .card").removeClass("text-white bg-warning")
        $(this).addClass("text-white bg-warning")
    })
});