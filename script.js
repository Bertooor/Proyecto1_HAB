"use strict";
const weather_key = '6dcfbe4f5d769224af0c28453d74d3e7';

const button = document.querySelector("button");

const li1 = document.getElementById("3hours");
const li2 = document.getElementById("rain1");
const li3 = document.getElementById("6hours");
const li4 = document.getElementById("rain2");
const li5 = document.getElementById("9hours");
const li6 = document.getElementById("rain3");
const li7 = document.getElementById("12hours");
const li8 = document.getElementById("rain4");
const li9 = document.getElementById("country");
const li10 = document.getElementById("city");
const li11 = document.getElementById("coord");
const li12 = document.getElementById("population");


async function user (position) {
    try {
            const { latitude, longitude } = position.coords;
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_key}`);
            let data = await response.json(response);
            console.log(data);
            li2.textContent = `${data.list[0].weather[0].main} / ${data.list[0].weather[0].description} `;
            li4.textContent = `${data.list[1].weather[0].main} / ${data.list[1].weather[0].description} `;
            li6.textContent = `${data.list[2].weather[0].main} / ${data.list[2].weather[0].description} `;
            li8.textContent = `${data.list[3].weather[0].main} / ${data.list[3].weather[0].description} `;
            li1.textContent = data.list[0].dt_txt;
            li3.textContent = data.list[1].dt_txt;
            li5.textContent = data.list[2].dt_txt;
            li7.textContent = data.list[3].dt_txt;
            li9.textContent = `Your country code is: ${data.city.country}`;
            li10.textContent = `The city you are in is named: ${data.city.name}`;
            li11.textContent = `Your coordinates are: Latitude ${latitude} and Longitude ${longitude}`;
            li12.textContent = `The current population in ${data.city.name} is estimated to be of ${data.city.population} inhabitants`;
        } catch(error) {
            console.error(`tenemos un error`, error.message);
        }
} 

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(user);
});
