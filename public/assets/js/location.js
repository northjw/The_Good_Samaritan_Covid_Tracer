/*eslint-disable*/
$(document).ready(() => {
   const placedata = [];
   const checkDate = [];
   const searchbar = $("#search");
   const addBtn = $("button#add");
   const covidBtn =$("button#covid");
   const display = $("div#display");

   $.get("/api/place_data", (data) => {
      data.forEach(arr => {
         placedata.push(arr.place_name);
      });
   });
   searchbar.autocomplete({
      source: placedata,
      minLength: 1,
      scroll: true
   })
      .focus(function(){
         $(this).autocomplete("search", "");
      });

   addBtn.on("click", (e) => {
      e.preventDefault();
      const place_name = searchbar.val();
      const dateCreated = $("input#depart").val();
        
      user_place = { date: dateCreated }; 
      // user_place['date'] = date;
      $.get("/api/place_data/" + place_name, (result)=> {
         const place_id = result.place_id;
         $.get("/api/user_data").then((user) => {
            const user_id = user.user_id;

            const user_place = {
               date: dateCreated,
               place_id: place_id,
               user_id: user_id
            };
            addUserPlace(user_place.date, user_place.place_id, user_place.user_id);
         });
      });
      if (checkDate.includes(dateCreated)){
         const existingUlTag = $("ul#" + dateCreated);
         var liTag = $("<li>");
         var memberInfoDiv = $("<div>").addClass("member-infos");
         var h1Tag = $("<h1>").addClass("member-title").text(place_name);
         memberInfoDiv.append(h1Tag);
         liTag.append(memberInfoDiv);
         existingUlTag.append(liTag);
         display.append(ulTag);
      }else{
         var ulTag = $("<ul>").addClass("timeline").attr("id", dateCreated);
         const dateholder = $("<div>").addClass("dateheader").text(dateCreated);
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
         .catch((err)=> {
            console.log(err);
         });
   }

   covidBtn.on("click", (e) => {
      e.preventDefault();
      const datebtn = $("input#depart");
      alert("Thank you for being a good samaritan and reporting your status.");
      $.get("/api/user_data").then((data)=> {
         const dateCreated = datebtn.val();
         const userId = data.user_id;
         let covidCheck = data.covid;
         if(covidCheck === false){
            covidCheck = true;
         }
         const covidUpdate = {
            user_id: userId,
            covid: covidCheck,
            date: dateCreated
         };
         updateCovidStatus(covidUpdate);
         $.get("/api/user_place/" + userId, (result)=> {
            const listsOfPlaceId = [];
            result.forEach(places => {
               listsOfPlaceId.push(places.PlacePlaceId);
            });
                
            // var listsOfUserId = [];
            listsOfPlaceId.forEach(arr =>{
               $.get("/api/user_place/places/" + arr, (results)=> {
                  results.forEach(arr => {
                     $.get("/api/user_data/user_id/" + arr.UserUserId, (userInfo) => {
                        const userEmail = userInfo.email;
                        $.post("/api/email", {
                           email: userEmail
                        }).catch(err => console.log(err));
                     });
                  });
               });
            });
         });
      });


      // datebtn.css('background', 'red');

      function updateCovidStatus (updates){
         $.ajax({
            method: "PUT",
            url: "/api/covid_check",
            data: updates
         });
      }
   });
    
   function createPlaceListForTheUser () {
      $.get("/api/user_data").then((user)=> {
         $.get("/api/user_place/date/" + user.user_id, (data) => {
            // console.log(data)
            if (checkDate.length === 0){
               checkDate.push(data[0].date);
               const ulTag = $("<ul>").addClass("timeline").attr("id", data[0].date);
               const dateholder = $("<div>").addClass("dateheader").text(data[0].date);
               ulTag.append(dateholder);
               display.append(ulTag);
            }
            data.forEach(arr => {
               if(checkDate.includes(arr.date)){
                  addValueToTable(arr.date, arr.PlacePlaceId);
               } else{
                  createTable(arr.date, arr.PlacePlaceId);
                  checkDate.push(arr.date);
               }
                    
            });
         });
      });
   }

   function addValueToTable (date, place_id){
      const existingUlTag = $("ul#" + date);
      const liTag = $("<li>");
      const memberInfoDiv = $("<div>").addClass("member-infos");
      $.get("/api/place_data/place_id/" + place_id, (result)=> {
         // console.log(result)
         const h1Tag = $("<h1>").addClass("member-title").text(result.place_name);
         memberInfoDiv.append(h1Tag);
      });
      liTag.append(memberInfoDiv);
      existingUlTag.append(liTag);
      display.append(existingUlTag);
   }

   function createTable (date, place_id) {
      const ulTag = $("<ul>").addClass("timeline").attr("id", date);
      const dateholder = $("<div>").addClass("dateheader").text(date);
      const liTag = $("<li>");
      const memberInfoDiv = $("<div>").addClass("member-infos");
      $.get("/api/place_data/place_id" + place_id, (result)=> {
         const h1Tag = $("<h1>").addClass("member-title").text(result.place_name);
         memberInfoDiv.append(h1Tag);
      });
      liTag.append(memberInfoDiv);
      ulTag.append(dateholder);
      ulTag.append(liTag);
      display.append(ulTag);
   }  

   createPlaceListForTheUser();

});

