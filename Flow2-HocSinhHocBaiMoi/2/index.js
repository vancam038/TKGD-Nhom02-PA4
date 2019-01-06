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
        toggleSPA(mT, mF, mT, mT, mT);
    })

    $("#brief-card").click(() => {
        toggleSPA(mF, mT, mT, mT, mT);
    })

    $("#pwp-card").click(() => {
        toggleSPA(mT, mT, mF, mT, mT);
    })

    $("#extra-card").click(() => {
        toggleSPA(mT, mT, mT, mF, mT);
    })

    $("#support-card").click(() => {
        toggleSPA(mT, mT, mT, mT, mF);
    })

    $("#btn-back").click(() => {
        window.location.replace("../1/index.html");
    });

    $(".lesson").click(function () {
        $(".lesson").removeClass("text-white bg-dark font-weight-bold");
        $(this).addClass("text-white bg-dark font-weight-bold");
    })

    $(".options-card-group .card").click(function () {
        $(".choice-card").children(".card-body").removeClass("arrow_box");
        $(this).children(".card-body").addClass("arrow_box font-weight-bold");
    })

    $("#btn-submit-score").click(() => {
        showSuccessAlert();
    })
});

function showSuccessAlert() {
    // var notification = alertify.notify('Giao dịch thành công', 'success', 3, function () {
    //     showErrorAlert();
    //     console.log('dismissed');
    // });

    alertify.alert('Thông báo', 'Chúc mừng bạn đã hoàn tất bài kiểm tra!', function () {
        // showErrorAlert();
        // window.location.replace("../0_home/index.html");
    });
}
