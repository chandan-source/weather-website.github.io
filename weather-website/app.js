// Tutorial by http://youtube.com/CodeExplained
// api key : 7ba67ceb9a0415646a3b2453baa811f0585441b4a2278e77b50fec2e8f41ecbe
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "7ba67ceb9a0415646a3b2453baa811f0";
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support 
    Geolocation</p>";
}

function setposition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getweather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = '<p> ${erroe.message} </p>';
    
}

function getweather(latitude, longitude){
    let api = 'http://api.openweathermap.org/data/2.5/weather/
    lat=${latitude}&lon=${longitude}&appid=${key}';
    
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = math.floor(data.main.temp -
        kelvin);
        weather.description = data.weather[0].description;
        weather.iconID = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}

function displayWeather(){
    iconElement.innerHTML = '<img src="icons/${weather.iconID}.png"/>';
    temperatureElement.innerHTML = '${weather.temperature.value}°<span>C</span>';
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = '${weather.city}, ${weather.country}';
}