$(document).ready(function () {
    var placedata = [];
    var searchbar = $('#search')
    searchbar.on('keyup', function(e){
        let searchedvalue = e.target.value;
        const filteredPlaceData = placedata.filter((place_name) => {
            return (
                place_name.place_name.includes(searchedvalue)
            );
        });
        filteredPlaceData.forEach(createGuessedValueTab)
        // $.each(filteredPlaceData, createGuessedValueTab)
    });
   
    function createGuessedValueTab(results) {
        // console.log(data)
            let guessedName = results.place_name;
            let newDiv = $('<div>').addClass('dropdown-item').text(guessedName)
            console.log(newDiv)
            searchbar.addClass('dropdown-divider')
            searchbar.append(newDiv);
    }

    $.get("/api/place_data", function (data) {
        placedata = data;
    })
});