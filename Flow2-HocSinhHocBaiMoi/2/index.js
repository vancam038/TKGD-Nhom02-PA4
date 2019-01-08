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

    // 
    $("#btn-send-mess").click(() => {
        $("#exampleFormControlTextarea1").val("");
        const mess = `<div class="card text-dark bg-light mb-3">
        <div class="card-body p-1 d-flex">
            <img src="../../assets/img/man.png" alt="" width="64px" height="64px">
            <div class="text-section ml-3 w-100">
                <div class="name-and-date d-flex justify-content-between">
                    <h5 class="card-title">Song Văn Cẩm</h5>
                    <p class="card-text"><small class="text-muted">28/09/2018
                            15:05PM
                            Trả lời</small></p>
                </div>
                <p class="card-text ml-3">Lorem ipsum dolor sit amet
                    consectetur
                    adipisicing elit.
                    Veritatis, minima?</p>
            </div>
        </div>
    </div>`

        $(".list-msg").append(mess);

    })

});

function showSuccessAlert() {
    // var notification = alertify.notify('Giao dịch thành công', 'success', 3, function () {
    //     showErrorAlert();
    //     console.log('dismissed');
    // });

    alertify.alert('Thông báo', 'Bạn trả lời đúng 2/2 câu!', function () {
        // showErrorAlert();
        // window.location.replace("../0_home/index.html");
    });
}
