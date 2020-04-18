$('.modal').modal();

//const GOOGLE_API_KEY = 'AIzaSyAuAw09DnunxYW9E9SjcKvYanUYhWcOdLA';
const GEOCODING_API_KEY = "1ac03d1663a44a149344a23b47ce483f";
var lat, lang;
function reverseGeoLocationUrl(lat, lon) {
    const baseURL = 'https://api.opencagedata.com/geocode/v1/json?'
    const query = 'q=' + lat + ',' + lon
    const key = '&key=' + GEOCODING_API_KEY;
    // return baseURL + query + key;
    console.log(baseURL + query + key);
    $.ajax({
        url: "https://api.opencagedata.com/geocode/v1/json?" + 'q=' + lat + ',' + lon + '&key=' + GEOCODING_API_KEY,
        method: "GET"
    }).then(function (response) {
        console.log(response.results[0].components.county);
        var houseNo = response.results[0].components.house_number;
        var county = response.results[0].components.county;
        var road = response.results[0].components.road;
        var state = response.results[0].components.state_code;
        var postalCode = response.results[0].components.postcode;
        var country = response.results[0].components.country;
        var formatted = response.results[0].formatted;
        console.log("Address is: " + formatted);
        // $("#demo").append(houseNo , road ,county ,state, postalCode, country);
        console.log("The address is " + ($("#locationBtn").value = formatted));
    });
}
var x = document.getElementById("demo");

function getLocation() {
    event.preventDefault();
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
         
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}

function showPosition(position) {
     lat = position.coords.latitude;
     lang = position.coords.longitude;
    console.log(lat);
    console.log(lang);
    reverseGeoLocationUrl(lat, lang);
}

    console.log("value of lat and long outside function is :" + lat + "," + lang );
    var map;
    function initMap() {
        console.log(lat);
        console.log(lang);
        //reverseGeoLocationUrl(lat, lang);
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:45.45, lng:-100.989 },
        zoom: 15
        
        });
        }
    
function contactDetails() {

}   