let input = document.querySelector(".input");
let getweather = document.querySelector(".search");
let weatherele = document.querySelector(".weatherinfo");
getweather.addEventListener("click", () => {
  let city = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a10dccba144b4a2353701756b0ec1397`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let temp = parseInt(data.main.temp - 273);
      let main = data.weather[0].main;
      let feelsLike = parseInt(data.main.feels_like - 273);
      let humd = parseInt(data.main.humidity);
      let wind = parseInt(data.wind.speed);
      let image;
      if (main == "Clear") {
        image = "photos/clear.jpg";
      } else if (main == "Clouds") {
        image = "photos/clouds.jpg";
      } else if (main == "Drizzle") {
        image = "photos/drizzle.jpg";
      } else if (main == "Rain") {
        image = "photos/rain.jpg";
      } else if (main == "Snow") {
        image = "photos/snow.jpg";
      } else if (main == "Mist") {
        image = "photos/mist.jpg";
      } else if (main == "Haze") {
        image = "photos/haze.jpg";
      }

      weatherele.innerHTML = `<img src="${image}" height="90px" width="90px" />
      <div>
        <h2 class="temperature">${temp}°C</h2>
        <h3 class="main">${main}</h3>
      </div>
      <div class="extrainfo">
        <p class="feelslike">Feels Like:${feelsLike}</p>
        <p class="humidity">Humidity:${humd}%</p>
        <p class="wind">Wind Speed:${wind} kmph</p>
      </div>`;
    })
    .catch((err) => {
      alert("Enter valid City");
    });
});
