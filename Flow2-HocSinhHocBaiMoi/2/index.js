function toggleSPA(briefStatus, testStatus, pwpStatus, extraStatus, supportStatus) {
    $('.brief-wrapper').prop("hidden", briefStatus);
    $('.test-wrapper').prop("hidden", testStatus);
    $('.pwp-wrapper').prop("hidden", pwpStatus);
    $('.extra-wrapper').prop("hidden", extraStatus);
    $('.support-wrapper').prop("hidden", supportStatus);
}

$(document).ready(function () {
    const mT = true;
    const mF = false;
    toggleSPA(mF, mT, mT, mT, mT);

    $("#btn-back").click(() => {
        window.location.replace("../1/index.html");
    });

    $("#test-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#test-card-body").addClass("arrow_box");
        toggleSPA(mT, mF, mT, mT, mT);
    })

    $("#brief-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#brief-card-body").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT);
    })

    $("#pwp-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#pwp-card-body").addClass("arrow_box");
        toggleSPA(mT, mT, mF, mT, mT);
    })

    $("#extra-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#extra-card-body").addClass("arrow_box");
        toggleSPA(mT, mT, mT, mF, mT);
    })

    $("#support-card").click(() => {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $("#support-card-body").addClass("arrow_box");
        toggleSPA(mT, mT, mT, mT, mF);
    })

    $("#btn-back").click(() => {
        window.location.replace("../1/index.html");
    });
});