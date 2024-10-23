document.getElementById("getWeatherBtn").addEventListener("click", async function() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const weatherResult = document.getElementById("weatherResult");
  
    if (city) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
  
      if (data.cod === 200) {
        weatherResult.classList.remove("hidden");
        weatherResult.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      } else {
        weatherResult.classList.remove("hidden");
        weatherResult.innerHTML = `<p>City not found!</p>`;
      }
    }
  });
  