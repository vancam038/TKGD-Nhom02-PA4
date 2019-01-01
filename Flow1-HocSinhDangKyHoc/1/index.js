var a = document.querySelectorAll(".course-card");
a.forEach(item => {
    item.onclick = () => {
        a.forEach(subItem => {
            var color = subItem.getAttribute("data-color");
            subItem.classList.remove("active-card");
            subItem.querySelector(".card-body").classList.remove(`${color}-gradient`);
        })
        var color = item.getAttribute("data-color");
        item.classList.add("active-card");
        item.querySelector(".card-body").classList.add(`${color}-gradient`);
        document.getElementById("next-step").disabled = false;
    }
})
document.querySelector("#next-step").onclick = () => {
    var b = document.querySelector(".course-card.active-card");
    console.log(b);
    if (!b) {
        console.log("here");
        alert("Bạn chưa chọn khóa học nào")
    } else {
        var price = document.querySelector(".course-card.active-card .card-footer").innerText;
        b = b.cloneNode(true);
        document.querySelector(".next-step .card-content").innerHTML = '';
        document.querySelector(".first-step").classList.add("hidden");
        document.querySelector(".next-step").classList.remove("hidden");
        document.querySelector(".next-step .card-content").appendChild(b);
        var color = b.getAttribute("data-color");
        b.classList.remove("active-card");
        b.querySelector(".card-body").classList.remove(`${color}-gradient`);
        document.querySelector(".course-fee span").innerText = price;
    }
}
document.querySelector("#return").onclick = () => {
    document.querySelector(".first-step").classList.remove("hidden");
    document.querySelector(".next-step").classList.add("hidden");
}

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });

    $("#backToHome").click(function(){
        window.location.replace("../0_home/index.html");
    });
});