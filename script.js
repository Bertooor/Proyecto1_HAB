"use strict";

const weather_key = '6dcfbe4f5d769224af0c28453d74d3e7';
//const forecast_key = '50b4400f89634c70845a4b0d583a9986';

const button = document.querySelector("button");

const user = position => {
    const { latitude, longitude } = position.coords;
    //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_key}`)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_key}`)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => setWeatherRain(data))
}

const setWeatherRain = data => {
    const li = document.querySelector("li");
    console.log(data);
    li.textContent += data.list[3][0];  
}

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(user);
})