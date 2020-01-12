const spots = "data.json";

$(document).ready(function() {
// write your code here
$.getJSON(spots, function(data){
    $.each(data, function(index){
      // Initially I created a whole table in HTML and was trying to get JSON info into the the corresponding rows
      // After one of my test the links column was showing but the JSON info was creating it's own table
      // 
      $("table").append("<tr><td>" + data[index].name +"</td><td>" + data[index].description + "</td><td class='mapLink'><button class='pure-button'><a href='https://www.google.com/maps?q=" + data[index].location + "'>Click to Open in Google Maps</a></button></td></tr>");
      // $("table").append("<tr><td>") + data[index].name (not sure if this should go in quotes)
    });
  });
});
