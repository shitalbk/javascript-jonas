// OUR FIRST AJAX CALL : XMLHttpRequest
// AJAX => ASYNCHRONOUS JAVASCRIPT XML

'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    listing(data);
    countriesContainer.style.opacity = 1;
  });
};

function listing(data){
  const { currencies } = data;
  console.log(currencies);
   const extract = (p) => Object.keys(currencies).map(name => currencies[name][p]);
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
      <p class="country__row"><span>💰</span>${extract('name')}</p>
    </div>
  </article>
  `;
    
    console.log(extract('name'));
    countriesContainer.insertAdjacentHTML('beforeend', html);
}

getCountryData("Saudi Arabia",);
getCountryData("Iran");
getCountryData("Nepal");
getCountryData("Bhutan");


/*

<a class="country__map" href=${
    data.maps.googleMaps
  }>Click the Map for location</a>
*/