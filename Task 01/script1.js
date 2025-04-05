document.addEventListener("DOMContentLoaded", function() {

    const weatherData = {
        city: "New York",
        temperature: "72°F",
        condition: "Sunny",
        icon: "https://i.pinimg.com/736x/d7/b1/87/d7b1878cd0f780a57da9e5fca9369d64.jpg" 
    };


    document.getElementById("cityName").textContent = weatherData.city;
    document.getElementById("temperature").textContent = weatherData.temperature;
    document.getElementById("weatherCondition").textContent = weatherData.condition;
    document.getElementById("weatherIcon").src = weatherData.icon;
});