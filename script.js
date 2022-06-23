"use strict";
const weather_key = '6dcfbe4f5d769224af0c28453d74d3e7';

const button = document.querySelector("button");


const li1 = document.getElementById("city");
const li2 = document.getElementById("hours3");
const li3 = document.getElementById("temp1");
const li4 = document.getElementById("icono1");
const li5 = document.getElementById("rain1");
const li6 = document.getElementById("hours6");
const li7 = document.getElementById("temp2");
const li8 = document.getElementById("icono2");
const li9 = document.getElementById("rain2");
const li10 = document.getElementById("hours9");
const li11 = document.getElementById("temp3");
const li12 = document.getElementById("icono3");
const li13 = document.getElementById("rain3");
const li14 = document.getElementById("hours12");
const li15 = document.getElementById("temp4");
const li16 = document.getElementById("icono4");
const li17 = document.getElementById("rain4");


async function user (position) {
    try {
        const { latitude, longitude } = position.coords;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_key}`);
        let data = await response.json(response);
        console.log(data);
        li1.textContent = `${data.city.name}, ${data.city.country}`;
        li2.textContent = data.list[0].dt_txt;
        li3.textContent = `${toCelsius(data.list[0].main.temp)}c`;
        //li4.textContent =
        li5.textContent = data.list[0].weather[0].main;
        li6.textContent = data.list[1].dt_txt;
        li7.textContent = `${toCelsius(data.list[1].main.temp)}c`;
        //li8.textContent =
        li9.textContent = data.list[1].weather[0].main;
        li10.textContent = data.list[2].dt_txt;
        li11.textContent = `${toCelsius(data.list[2].main.temp)}c`;
        //li12.textContent = 
        li13.textContent = data.list[2].weather[0].main;
        li14.textContent = data.list[3].dt_txt;
        li15.textContent = `${toCelsius(data.list[3].main.temp)}c`;
        //li16.textContent = 
        li17.textContent = data.list[3].weather[0].main;
    } catch(error) {
        console.error(`tenemos un error`, error.message);
    }
} 

function toCelsius (kelvin) {
    return Math.round(kelvin - 273.15);
}

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(user);
});

            
            
            