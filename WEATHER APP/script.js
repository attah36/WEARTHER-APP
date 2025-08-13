let searchbutton = document.querySelector("button");

const apiKey = "f619b7385b037b067094d3d503a83e8a";

async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        let data = await response.json();
        displayWeather(data);
} catch (error) {
        weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
}
}
function displayWeather(data) { 
    let weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

searchbutton.addEventListener("click", function getCity(){
    let city = document.getElementById("cityinput").value.trim();
    if (city){
        getWeather(city);
    }
    else{
        alert("Please enter a city name");
    }
});