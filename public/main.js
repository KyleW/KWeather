
var getCurrentLoc = function(){
  // Details on API at http://www.telize.com/
  $.getJSON("http://www.telize.com/geoip?callback=?",function(json) {
    console.log(json);
  });
};

var lookupLatLong = function(loc){};

var getForecast = function(){};



$(document).ready(function(){
  getCurrentLoc();

  if (!("autofocus" in document.createElement("input"))) {
    $("#city").focus();
  }

});