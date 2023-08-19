//////////// PROMISIFYING THE GEOLOCATION API //////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getPosition = function() {
  return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    // position => resolve(position),
    // err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const getLocationData = function() {
  getPosition()
  .then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  })
  .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      if (data.latt === '0.00000' && data.longt === '0.00000') {
        throw new Error(
          `Latitude and Longitude not found!! ${data.latt} ${data.longt}`
        );
      }
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      //  console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      // console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err} 🔥☄️⚡️💥💫🌚`);
      renderError(`Something went wrong 🔥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function(data, className = '') {
  const html = `
    <article class = "country ${className}">
      <div class = "country__data">
      <img class="country__img" src="${data.flags.png}"/>
        <h3 class = "country__name">${data.name.common}</h3>
        <p class = "country__city">${data.capital}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

btn.addEventListener('click', getLocationData);