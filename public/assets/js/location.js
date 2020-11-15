$(document).ready(function () {
    var searchbar = $('#search')
    searchbar.on('keyup', function(e){
        console.log(e.target.value)
    })
    $.get("/api/place_data", function (data) {
        console.log(data);
    })
});