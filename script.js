"use strict";
const weather_key = "6dcfbe4f5d769224af0c28453d74d3e7";

const button = document.querySelector("button");

const error = document.querySelector("p");
const ul = document.querySelectorAll("ul");

const li1 = document.getElementById("city");
const li2 = document.getElementById("hours3");
const li3 = document.getElementById("temp1");
const icono1 = document.getElementById("icono1");
const li5 = document.getElementById("rain1");
const li6 = document.getElementById("hours6");
const li7 = document.getElementById("temp2");
const icono2 = document.getElementById("icono2");
const li9 = document.getElementById("rain2");
const li10 = document.getElementById("hours9");
const li11 = document.getElementById("temp3");
const icono3 = document.getElementById("icono3");
const li13 = document.getElementById("rain3");
const li14 = document.getElementById("hours12");
const li15 = document.getElementById("temp4");
const icono4 = document.getElementById("icono4");
const li17 = document.getElementById("rain4");


async function user(position) {
  try {
    const { latitude, longitude } = position.coords;

    let response = await fetch (
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_key}`
    );
    let data = await response.json(response);
    console.log(data);
    error.textContent = data.message === 0 ? "" : `ERROR Cod: ${data.cod} Message: ${data.message}`;

    icono1.style.display = 'block';
    icono2.style.display = 'block';
    icono3.style.display = 'block';
    icono4.style.display = 'block';

    li1.textContent = `${data.city.name}, ${data.city.country}`;
      
    li2.textContent = data.list[0].dt_txt;
    li3.textContent = `Temperature: ${toCelsius(data.list[0].main.temp)}ºC`;
    const iconCode1 = data.list[0].weather[0].icon;
    icono1.src = `http://openweathermap.org/img/wn/${iconCode1}.png`;
    li5.textContent = `Forecast: ${data.list[0].weather[0].description}`;
      
    li6.textContent = data.list[1].dt_txt;
    li7.textContent = `Temperature: ${toCelsius(data.list[1].main.temp)}ºC`;
    const iconCode2 = data.list[1].weather[0].icon;
    icono2.src = `http://openweathermap.org/img/wn/${iconCode2}.png`;
    li9.textContent = `Forecast: ${data.list[1].weather[0].description}`;
      
    li10.textContent = data.list[2].dt_txt;
    li11.textContent = `Temperature: ${toCelsius(data.list[2].main.temp)}ºC`;
    const iconCode3 = data.list[2].weather[0].icon;
    icono3.src = `http://openweathermap.org/img/wn/${iconCode3}.png`;
    li13.textContent = `Forecast: ${data.list[2].weather[0].description}`;
      
    li14.textContent = data.list[3].dt_txt;
    li15.textContent = `Temperature: ${toCelsius(data.list[3].main.temp)}ºC`;
    const iconCode4 = data.list[3].weather[0].icon;
    icono4.src = `http://openweathermap.org/img/wn/${iconCode4}.png`;
    li17.textContent = `Forecast: ${data.list[3].weather[0].description}`;
      
  } catch (error) {
    alert('Hubo un error');
  }
}

function toCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(user);
});

async function busqueda(position) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${position}&appid=${weather_key}`
    );
    const data = await response.json();
    console.log(data);
    error.textContent = data.message === 0 ? "" : `ERROR Cod: ${data.cod} Message: ${data.message}`;

    icono1.style.display = 'block';
    icono2.style.display = 'block';
    icono3.style.display = 'block';
    icono4.style.display = 'block';

    li1.textContent = `${data.city.name}, ${data.city.country}`;

    li2.textContent = data.list[0].dt_txt;
    li3.textContent = `Temperature: ${toCelsius(data.list[0].main.temp)}ºC`;
    const iconCode1 = data.list[0].weather[0].icon;
    icono1.src = `http://openweathermap.org/img/wn/${iconCode1}.png`;
    li5.textContent = `Forecast: ${data.list[0].weather[0].description}`;
    
    li6.textContent = data.list[1].dt_txt;
    li7.textContent = `Temperature: ${toCelsius(data.list[1].main.temp)}ºC`;
    const iconCode2 = data.list[1].weather[0].icon;
    icono2.src = `http://openweathermap.org/img/wn/${iconCode2}.png`;
    li9.textContent = `Forecast: ${data.list[1].weather[0].description}`;

    li10.textContent = data.list[2].dt_txt;
    li11.textContent = `Temperature: ${toCelsius(data.list[2].main.temp)}ºC`;
    const iconCode3 = data.list[2].weather[0].icon;
    icono3.src = `http://openweathermap.org/img/wn/${iconCode3}.png`;
    li13.textContent = `Forecast: ${data.list[2].weather[0].description}`;

    li14.textContent = data.list[3].dt_txt;
    li15.textContent = `Temperature: ${toCelsius(data.list[3].main.temp)}ºC`;
    const iconCode4 = data.list[3].weather[0].icon;
    icono4.src = `http://openweathermap.org/img/wn/${iconCode4}.png`;
    li17.textContent = `Forecast: ${data.list[3].weather[0].description}`;

  } catch (error) {
    console.error();
    alert('Hubo un error');
  }
}

function onSubmit(event) {
  event.preventDefault();
  busqueda(searchbox.value);
}

const form = document.getElementById("form");
const searchbox = document.getElementById("search");
form.addEventListener("submit", onSubmit);
