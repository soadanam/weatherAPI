// console.log('hello from weather API')

/* const getInputData = () => {
    const inputID = document.getElementById('inputId');
    const inputText = inputID.value;
    console.log(inputText);

    fetch('https://api.openweathermap.org/data/2.5/forecast?id=1336135&appid=f0dcfd0a80ce3f8942ce8dbd9b7deb10')
    .then(res => res.json())
    .then(data => console.log(data))
} */

//load from local json file
/* const loadCountries = () => {
    fetch('/json/current.city.list.json')
    .then(res => res.json())
    .then(allData => findCountry(allData))
}
loadCountries();

const findCountry = (countries) => {
    console.log(countries)
    countries.forEach( country => console.log(country.name))
} */


//gets country name from input and fetch data by that name!
const getInputData = () => {
    const inputID = document.getElementById('inputId');
    const inputText = inputID.value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=f0dcfd0a80ce3f8942ce8dbd9b7deb10&units=metric`)
    .then(res => res.json())
    .then(allData => showWeatherDetails(allData))
    inputID.value = '';
}

const showWeatherDetails = countries => {
    console.log(countries)
    const weatherDetailsId = document.getElementById('weatherDetail');
    weatherDetailsId.innerText = '';
    const myDiv = document.createElement('div');
    myDiv.classList.add('weather-div')
    myDiv.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${countries.weather[0].icon}@2x.png">
        <h1>${countries.name}, ${countries.sys.country}</h1>
        <h3 class=" fs-">${countries.main.temp}&#8451;</h3>
        <h5 class="fw-lighter fs-4" >${countries.weather[0].description}</h5>
    `;
    weatherDetailsId.appendChild(myDiv);

}