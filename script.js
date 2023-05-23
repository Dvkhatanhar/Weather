document.getElementById("weatherForm").addEventListener("submit", function(e) {
  e.preventDefault();
  var location = document.getElementById("locationInput").value;
  getWeatherData(location);
});

function getWeatherData(location) {
  var api_key = "d161d142f9a9056480d04d9c64c51a98";  
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
}
function displayWeather(weatherData) {
  var lonElement = document.getElementById("lon");
  var latElement = document.getElementById("lat");
  var temperatureElement = document.getElementById("temperature");
  var humidityElement = document.getElementById("humidity");
  var descriptionElement = document.getElementById("description");
  var countryElement = document.getElementById("country");
  var speedElement = document.getElementById("speed");
  var visibilityElement = document.getElementById("visibility");

  lonElement.textContent = "Longitude: " + weatherData.coord.lon;
  latElement.textContent = "Latitude: " + weatherData.coord.lat;
  temperatureElement.textContent = "Temperature: " +weatherData.main.temp+ " Celcius";
  humidityElement.textContent = "Humidity: " + weatherData.main.humidity + "%";
  descriptionElement.textContent = "Description: " + weatherData.weather[0].description;
  countryElement.textContent = "Country: " + weatherData.sys.country;
  speedElement.textContent = "Wind Speed: " + weatherData.wind.speed + " Kilometers per Hour";
  visibilityElement.textContent = "Visibility: " + weatherData.visibility + " meters";

  document.getElementById("weatherData").classList.remove("hidden");
}