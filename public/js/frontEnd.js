// ADD DOCUMENT CLICK FUNCTION ////////////////////////////////////////

$(".createForm").on("click", function (event) {
  event.preventDefault();

  $.ajax("/add", {
      type: "GET"
    }).then(
      function() {
        location.assign("/add");
      }
    );

});

// BACK TO FILE VIEW CLICK FUNCTION ////////////////////////////////////////

$(".fileView").on("click", function (event) {
  event.preventDefault();

  $.ajax("/", {
      type: "GET"
    }).then(
      function() {
        location.assign("/");
      }
    );

});

// DATE PICKER FUNCTION ////////////////////////////////////////

$(document).ready(function(){
  $('.datepicker').datepicker({
    format: 'mmddyy'

  });
});