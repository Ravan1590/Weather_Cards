const weatherData = [
    { city: "Tokyo", temp: 38, condition: "Cloudy" },
    { city: "London", temp: 35, condition: "Rainy" },
    { city: "Sydney", temp: 25, condition: "Sunny" }
];

const buttons = document.querySelectorAll(".city-button");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const weatherCard = document.querySelector(".weather-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const city = button.getAttribute("data-city");
        const cityWeather = weatherData.find(item => item.city === city);

        if (cityWeather) {
            cityName.textContent = cityWeather.city;
            temperature.textContent = `Temperature: ${cityWeather.temp}°c`;
            condition.textContent = `Condition: ${cityWeather.condition}`;

            weatherCard.classList.remove("fade-in");
            void weatherCard.offsetWidth;
            weatherCard.classList.add("fade-in");
        }
    });
});
