const apiKey = "65a385358ae8b3c10b252c85de4c3938";

function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // 🔍 DEBUG (important)

            if (data.cod == "404") {
                alert("City not found!");
                return;
            }

            document.getElementById("location").innerText = data.name;
            document.getElementById("temperature").innerText =
                `🌡 Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText =
                `☁ Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText =
                `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText =
                `🌬 Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert("Network or API error");
            console.error(error);
        });
}
