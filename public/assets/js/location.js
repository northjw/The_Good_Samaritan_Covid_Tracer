$(document).ready(function () {
    $.get("/places", function (data) {
        console.log(data);
    })
})