/* Asynchronous JavaScript
Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the
console
5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31
Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474

*/

// 1. Finding longitude and latitude of a location
function whereAmI(longitude, latitude) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.
        console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
      });
}

// 2. Reverse Geocoding using AJAX and fetch API

// Using AJAX call
function callAjax() {
  const request = new XMLHttpRequest();
  whereAmI(52.508, 13.381);
  request.open('GET', `https://geocode.xyz/52.508,13.381?geoit=json`);
  request.send();
  request.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(`You are in ${data.country}`);
  });
}

const btn = document.querySelector('.btn-country');
btn.addEventListener('click', callAjax);

// Using Fetch API
const requestTwo = fetch('https://geocode.xyz/52.508,13.381?geoit=json');
console.log(requestTwo);

const getData = function(latitude, longitude){
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
  .then(function(response){
    console.log(response);
  });
};

getData(52.508, 13.381);

const getLocationData = function(latitude, longitude){
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
  .then(response => response.json())
  .then(function(data) {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);
  });
};

getLocationData(52.508, 13.381);
