$(document).ready(function () {
    var placedata = [];
    var searchbar = $('#search')
    var addBtn = $("button#add")
    var covidBtn =$("button#covid")
    $.get("/api/place_data", function (data) {
        data.forEach(arr => {
            placedata.push(arr.place_name)
        });
    })
    searchbar.autocomplete({
        source: placedata,
        minLength: 1,
        scroll: true
    }).focus(function(){
        $(this).autocomplete("search", "");
    });

    addBtn.on('click', function(e) {
        e.preventDefault();
        var place_name = searchbar.val()
        var dateCreated = $('input#depart').val();
        
        user_place =  { date: dateCreated } 
        // user_place['date'] = date;
        $.get("/api/place_data/" + place_name, function (result){
            var place_id = result.place_id
            $.get("/api/user_data").then(function (user) {
                var user_id = user.user_id

                var user_place = {
                    date: dateCreated,
                    place_id: place_id,
                    user_id: user_id
                };
                addUserPlace(user_place.date, user_place.place_id, user_place.user_id);
            });
        })
        
        searchbar.val("");
    });
    function addUserPlace(date, PlacePlaceId, UserUserId) {
        $.post("/api/user_place", {
            date: date,
            PlacePlaceId: PlacePlaceId,
            UserUserId: UserUserId
        })
        .catch(function(err){
            console.log(err)
        });
    };

    covidBtn.on('click', function (e) {
        e.preventDefault();
        var datebtn = $('input#depart');
        $.get("/api/user_data").then(function(data){
            var dateCreated = datebtn.val();
            var userId = data.user_id
            var covidCheck = data.covid
            if(covidCheck === false){
                covidCheck = true
            }
            var covidUpdate = {
                user_id: userId,
                covid: covidCheck,
                date: dateCreated
            }
            updateCovidStatus(covidUpdate);
            $.get("/api/user_place/" + userId, function(result){
                var listsOfPlaceId = [];
                result.forEach(places => {
                    listsOfPlaceId.push(places.PlacePlaceId)
                });
                
                // var listsOfUserId = [];
                listsOfPlaceId.forEach(arr =>{
                    $.get("/api/user_place/places/" + arr, function(results){
                        results.forEach(arr => {
                            $.get("/api/user_data/user_id/" + arr.UserUserId, function(userInfo) {
                                var userEmail = userInfo.email;
                                $.post("/api/email", {
                                    email: email
                                }).catch(err => console.log(err))
                            })
                        })
                    })
                });
            })
        })

        datebtn.css('backgorund', 'red');

        function updateCovidStatus (updates){
            $.ajax({
                method: "PUT",
                url: "/api/covid_check",
                data: updates
            });
        }
    })

});

