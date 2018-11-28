function toggleSPA(bankStatus, atmStatus, visaStatus, momoStatus, zaloStatus, hseStatus) {
    $('.bank-transfer').prop("hidden", bankStatus);
    $('.atm-transfer').prop("hidden", atmStatus);
    $('.visa-transfer').prop("hidden", visaStatus);
    $('.momo-transfer').prop("hidden", momoStatus);
    $('.zalo-transfer').prop("hidden", zaloStatus);
    $('.hse-transfer').prop("hidden", hseStatus);
}

$(document).ready(function () {
    const mT = true;
    const mF = false;
    toggleSPA(mF, mT, mT, mT, mT, mT);

    // $("#btn-back").click(() => {
    //     window.location.replace("../1/index.html");
    // });

    $("#bank-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#bank-transfer").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT, mT);
    });

    $("#atm-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#atm-transfer").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT, mT);
    });

    $("#visa-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#visa-transfer").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT, mT);
    });

    $("#momo-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#momo-transfer").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT, mT);
    });

    $("#zalo-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#zalo-transfer").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT, mT);
    });

    $("#hse-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#hse-transfer").addClass("arrow_box");
        toggleSPA(mF, mT, mT, mT, mT, mT);
    });

});