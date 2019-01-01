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
    $("#bank-transfer").addClass("arrow_box");

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
        toggleSPA(mT, mF, mT, mT, mT, mT);
    });

    $("#visa-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#visa-transfer").addClass("arrow_box");
        toggleSPA(mT, mT, mF, mT, mT, mT);
    });

    $("#momo-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#momo-transfer").addClass("arrow_box");
        toggleSPA(mT, mT, mT, mF, mT, mT);
    });

    $("#zalo-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#zalo-transfer").addClass("arrow_box");
        toggleSPA(mT, mT, mT, mT, mF, mT);
    });

    $("#hse-transfer").click(() => {
        $(".checkout-method").children().removeClass("arrow_box");
        $("#hse-transfer").addClass("arrow_box");
        toggleSPA(mT, mT, mT, mT, mT, mF);
    });


    $("#btn-momo-pay").click(() => {
        window.location.replace("./momo-popup.html");
    })

    $("#btn-zalo-pay").click(() => {
        window.location.replace("./zalo-popup.html");
    })

    $("#btn-back").click(() => {
        window.location.replace("./index1.html");
    });

    $('btn').click((e) => {
        e.preventDefault();
    })


    var timer = new Timer();
    timer.start({ countdown: true, startValues: { seconds: 6 } });
    $('#countdownExample .values').html('<div class="loader"></div>');
    timer.addEventListener('secondsUpdated', function (e) {
        $('#countdownExample .values').html(timer.getTimeValues().seconds);
    });
    timer.addEventListener('targetAchieved', function (e) {
        showSuccessAlert()
    });

});

function showSuccessAlert() {
    // var notification = alertify.notify('Giao dịch thành công', 'success', 3, function () {
    //     showErrorAlert();
    //     console.log('dismissed');
    // });

    alertify.alert('Thông báo', 'Phiên giao dịch đã hết hạn', function () {
        // showErrorAlert();
    });
}

function showErrorAlert() {
    var notification = alertify.notify('Giao dịch thất bại (for demo only)', 'error', 3, function () {
        console.log('dismissed');
    });
}