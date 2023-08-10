// OUR FIRST AJAX CALL : XMLHttpRequest
// AJAX => ASYNCHRONOUS JAVASCRIPT XML

'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getCountryData = function(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     listing(data);
//     countriesContainer.style.opacity = 1;
//   });
// };

// function listing(data){
//   const { currencies } = data;
//  // console.log(currencies);
//   const extract = (p) => Object.keys(currencies).map(name => currencies[name][p]);
//   const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}people</p>
//       <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//       <p class="country__row"><span>💰</span>${extract('name')}</p>
//     </div>
//   </article>
//   `;

//    // console.log(extract('symbol'));
//     countriesContainer.insertAdjacentHTML('beforeend', html);
// }

// getCountryData("Portugal");
// getCountryData("Nepal");
// getCountryData("Bhutan");
// getCountryData("United States");

// const getCountryAndNeighbour = function(country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders; // Destructuring arrays
//     if (!neighbour) return;

//     // AJAX call country 2
//     const requestTwo = new XMLHttpRequest();
//     requestTwo.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     requestTwo.send();

//     requestTwo.addEventListener('load', function() {
//       const [dataTwo] = JSON.parse(this.responseText);
//       console.log(dataTwo);

//       renderCountry(dataTwo, 'neighbour');
//     });
//   });
// };

// function renderCountry(data, className = '') {
//   const { currencies } = data;
//   // console.log(currencies);
//   const extract = p => Object.keys(currencies).map(name => currencies[name][p]);
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}people</p>
//       <p class="country__row"><span>🗣️</span>${Object.values(
//         data.languages
//       )}</p>
//       <p class="country__row"><span>💰</span>${extract('name')}</p>
//     </div>
//   </article>
//   `;

//   // console.log(extract('symbol'));
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// }

// getCountryAndNeighbour('Iran');

// setTimeout(()=> {
//   console.log('1 second passed.!');
//   setTimeout(()=> {
//     console.log('2 second passed.!!');
//     setTimeout(()=> {
//       console.log('3 second passed.!!!');
//       setTimeout(()=> {
//         console.log('4 second passed.!!!!');
//       },1000);
//     },1000);
//   },1000);
// },1000);
/*

<a class="country__map" href=${
    data.maps.googleMaps
  }>Click the Map for location</a>
*/

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`).
//   then(function (response){
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data);
//     renderCountry(data[0]);
//   })
// };

// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(response => response.json())
//   .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

// function renderCountry(data, className = '') {
//   const { currencies } = data;
//   console.log(data);
//   const extract = p => Object.keys(currencies).map(name => currencies[name][p]);
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}"/>
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}people</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(
//           data.languages
//         )}</p>
//         <p class="country__row"><span>💰</span>${extract('name')}</p>
//       </div>
//     </article>
//     `;

//   // console.log(extract('symbol'));
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// }

// // HANDLING REJECTED PROMISES

// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// // CHAINING PROMISES

// const getJSON = function(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sfgdfgd';
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥☄️⚡️💥💫🌚`);
//       renderError(`Something went wrong 🔥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

function renderCountry(data, className = '') {
  const { currencies } = data;
  console.log(data);
  const extract = p => Object.keys(currencies).map(name => currencies[name][p]);
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}"/>
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        )}</p>
        <p class="country__row"><span>💰</span>${extract('name')}</p>
      </div>
    </article>
    `;

  // console.log(extract('symbol'));
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
}

// HANDLING REJECTED PROMISES

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// CHAINING PROMISES

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function(country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if(!neighbour) throw new Error('No neighbour found!!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🔥☄️⚡️💥💫🌚`);
      renderError(`Something went wrong 🔥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function() {
  getCountryData('portugal');
});

getCountryData('sfdfsdfd');
