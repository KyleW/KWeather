
require('cloud/app.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});


var lookupLatLong = function(loc){
  // BING geocode docs http://msdn.microsoft.com/en-us/library/ff701711.aspx
  var fullURL="";
  var baseURL = "http://dev.virtualearth.net/REST/v1/Locations/";
  fullURL=baseURL+loc+"?userLocation="+userLocation+"&key="+bingMapsKey;
  console.log(fullURL);

  $.getJSON(fullURL,function(json) {
    console.log(json);
  });
};


var getForecast = function(){
  // wunderground docs - http://www.wunderground.com/weather/api/d/docs
};


var test = "curl http://dev.virtualearth.net/REST/v1/Locations/whitehouse?key=ArAn0ro5ojuZYap3gG_iPn3DcJKzG4jhY7qBIrbyeqg8xk7tNEbh36BWuJkGR-_p&userLocation=37.8726,-122.3044";