$(document).ready(function () {
    var placedata = [];
    var checkDate = [];
    var searchbar = $('#search')
    var addBtn = $("button#add")
    var covidBtn =$("button#covid")
    var display = $('div#display')

    $.get("/api/place_data", function (data) {
        data.forEach(arr => {
            placedata.push(arr.place_name)
        });
    })
    searchbar.autocomplete({
        source: placedata,
        minLength: 1,
        scroll: true
    })
    .focus(function(){
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
        if (checkDate.includes(dateCreated)){
            var existingUlTag = $("ul#" + dateCreated)
            var liTag = $("<li>");
            var memberInfoDiv = $("<div>").addClass("member-infos");
            var h1Tag = $("<h1>").addClass("member-title").text(place_name);
            memberInfoDiv.append(h1Tag);
            liTag.append(memberInfoDiv);
            existingUlTag.append(liTag);
            display.append(ulTag);
        }else{
            var ulTag = $("<ul>").addClass("timeline").attr("id", dateCreated);
            var dateholder = $("<div>").addClass("dateheader").text(dateCreated);
            var liTag = $("<li>");
            var memberInfoDiv = $("<div>").addClass("member-infos");
            var h1Tag = $("<h1>").addClass("member-title").text(place_name);
            memberInfoDiv.append(h1Tag);
            liTag.append(memberInfoDiv);
            ulTag.append(dateholder);
            ulTag.append(liTag);
            display.append(ulTag);
        }
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
        alert("Thank you for being a good samaritan and reporting your status.")
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
                                    email: userEmail
                                }).catch(err => console.log(err))
                            })
                        })
                    })
                });
            })
        })


        // datebtn.css('background', 'red');

        function updateCovidStatus (updates){
            $.ajax({
                method: "PUT",
                url: "/api/covid_check",
                data: updates
            });
        }
    })
    
    function createPlaceListForTheUser () {
        $.get("/api/user_data").then(function (user){
            $.get("/api/user_place/date/" + user.user_id, function(data) {
                // console.log(data)
                if (checkDate.length === 0){
                    checkDate.push(data[0].date)
                    var ulTag = $("<ul>").addClass("timeline").attr("id", data[0].date);
                    var dateholder = $("<div>").addClass("dateheader").text(data[0].date);
                    ulTag.append(dateholder);
                    display.append(ulTag);
                }
                data.forEach(arr => {
                    if(checkDate.includes(arr.date)){
                        addValueToTable(arr.date, arr.PlacePlaceId)
                    } else{
                        createTable(arr.date, arr.PlacePlaceId)
                        checkDate.push(arr.date)
                    }
                    
                })
            })
        })
    }

    function addValueToTable (date, place_id){
        var existingUlTag = $("ul#" + date)
        var liTag = $("<li>");
        var memberInfoDiv = $("<div>").addClass("member-infos");
        $.get("/api/place_data/place_id/" + place_id, function (result){
            // console.log(result)
            var h1Tag = $("<h1>").addClass("member-title").text(result.place_name);
            memberInfoDiv.append(h1Tag);
        })
        liTag.append(memberInfoDiv);
        existingUlTag.append(liTag);
        display.append(existingUlTag);
    }

    function createTable (date, place_id) {
        var ulTag = $("<ul>").addClass("timeline").attr("id", date);
        var dateholder = $("<div>").addClass("dateheader").text(date);
        var liTag = $("<li>");
        var memberInfoDiv = $("<div>").addClass("member-infos");
        $.get("/api/place_data/place_id" + place_id, function (result){
            var h1Tag = $("<h1>").addClass("member-title").text(result.place_name);
            memberInfoDiv.append(h1Tag);
        })
        liTag.append(memberInfoDiv);
        ulTag.append(dateholder);
        ulTag.append(liTag);
        display.append(ulTag);
    }  

    createPlaceListForTheUser();

});

