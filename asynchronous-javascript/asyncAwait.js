// Consuming promises with Async/ Await

// Await is alternative to .then() function while using fetch API.

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

const whereAmI = async function() {
  // Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding

    // fetch(`https://geocode.xyz/${lat},${lng}?geoit = json)
    // .then(res => console.log(res))

    // THE ABOVE .then() FUNCTION IS SIMILAR TO BELOW AWAIT FUNCTION

    const resGo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!resGo.ok)
    throw new Error('Problem getting location data');
    
    const dataGeo = await resGo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if(!res.ok)
    throw new Error('Problem getting country!!!');

    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💩💩💩`);
    renderError(`Something went wrong 💩💩💩 ${err.message}`);
  }
};

//whereAmI();
console.log('FIRST');

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
  countriesContainer.style.opacity = 1;
};

btn.addEventListener('click', whereAmI);
