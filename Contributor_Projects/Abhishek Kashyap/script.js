// API_KEY for the OpenWeatherMap API
const API_KEY = "use own OpenWeatherMap API";

/**
 * Retrieve weather data from OpenWeatherMap
 */
const getWeatherData = async (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`; // Use metric units
    try {
        const response = await fetch(FULL_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

/**
 * Show the weather data in HTML
 */
const showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};

/**
 * Retrieve city input and get the weather data
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const weatherData = await getWeatherData(city);
        if (weatherData) {
            showWeatherData(weatherData);
        } else {
            alert("Weather data not found for the given city.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong while fetching weather data.");
    }
};
