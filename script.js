"use strict";

const weather_key = '6dcfbe4f5d769224af0c28453d74d3e7';
//const forecast_key = '50b4400f89634c70845a4b0d583a9986';

const button = document.querySelector("button");

//const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_key}`;

const user = position => {
    const { latitude, longitude } = position.coords;
    //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_key}`)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_key}`)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => setWeatherRain(data))
    // async function getWeather(url) {
    //     try {
    //         let response = await fetch(url);
    //         let data = await response.json(response);
    //     } catch(error) {

    //     }
    // } 
}

const setWeatherRain = data => {
    const li1 = document.getElementById("3hours");
    const li2 = document.getElementById("rain1");
    const li3 = document.getElementById("6hours");
    const li4 = document.getElementById("rain2");
    const li5 = document.getElementById("9hours");
    const li6 = document.getElementById("rain3");
    const li7 = document.getElementById("12hours");
    const li8 = document.getElementById("rain4");
    console.log(data);


    //Falta gestionar los undefined de los periodos en los que no llueve.
//     li2.textContent += `Lluvia: ${data.list[0].rain["3h"]} mm/3h`;  
//     li4.textContent += `Lluvia: ${data.list[1].rain["3h"]} mm/3h`; 
//     li6.textContent += `Lluvia: ${data.list[2].rain["3h"]} mm/3h`; 
//     li8.textContent += `Lluvia: ${data.list[3].rain["3h"]} mm/3h`; 
//     li1.textContent += data.list[0].dt_txt;
//     li3.textContent += data.list[1].dt_txt;
//     li5.textContent += data.list[2].dt_txt;
//     li7.textContent += data.list[3].dt_txt;
// 


    //Gestionando los undefined con weather en lugar de rain
    li2.textContent += `${data.list[0].weather[0].main} / ${data.list[0].weather[0].description} `;
    li4.textContent += `${data.list[1].weather[0].main} / ${data.list[1].weather[0].description} `;
    li6.textContent += `${data.list[2].weather[0].main} / ${data.list[2].weather[0].description} `;
    li8.textContent += `${data.list[3].weather[0].main} / ${data.list[3].weather[0].description} `;
    li1.textContent += data.list[0].dt_txt;
    li3.textContent += data.list[1].dt_txt;
    li5.textContent += data.list[2].dt_txt;
    li7.textContent += data.list[3].dt_txt;
}

//Hay que resetear el button
button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(user);
})

//`Lluvia: ${data.list[0].rain["3h"]} mm/3h`

//El ternario no funciona, al parecer la promesa no puede leer undefined y da error.
//data.list[0].rain["3h"] === undefined ? 'No llueve' : `Lluvia: ${data.list[0].rain["3h"]} mm/3h`