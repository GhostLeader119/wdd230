// Loading HTML Inputs
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windchill_loc = document.querySelector('#wind-chill');
const windspeed_loc = document.querySelector('#wind-speed');
const weathercondition_loc = document.querySelector('#wx-condition');



const url_weather = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&appid=5106b42359082f0f0d14d61d1cf7f8f0&units=imperial' 
async function apiFetch() {
  try {
    const response = await fetch(url_weather);
    if (response.ok) {
      const data = await response.json();
       displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      //console.log(error);
  }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);


    let wind_speed = weatherData.wind.speed

    let tempature = weatherData.main.temp

    weathercondition_loc.textContent = weatherData.weather[0].description

    windchill_F(tempature,wind_speed)
}

function windchill_F(tempature,wind_speed){
    let windchill = 'N/A'
    if (tempature <= 50 && wind_speed > 3 ) {
        windchill = 35.74 + 0.6215 * tempature - 35.75 * (wind_speed ** 0.16) + 0.4275 * tempature * (wind_speed ** 0.16)
        windchill = Math.round(windchill)
    }
    currentTemp.textContent = tempature
    windspeed_loc.textContent = wind_speed + " MPH"
    windchill_loc.textContent = windchill
}
function windchill_C(){
    const tempature = 39 // Calacs run in C
    const wind_speed = 5 // Calcs run in kph
    let windchill = 'N/A'
    if (tempature <= 10 && wind_speed > 4.8){
        windchill = 35.74 + 0.6215 * tempature - 35.75 * (wind_speed ** 0.16) + 0.4275 * tempature * (wind_speed ** 0.16)
        windchill = Math.round(windchill)
    }
    document.querySelector("#tempature-input").textContent = tempature
    document.querySelector("#wind-speed").textContent = wind_speed + " KPH"
    windchill_loc.textContent = windchill
}
function convert_celsius(){
    let current_status = document.querySelector('#f-c').textContent
    if (current_status == 'F'){
        document.querySelector("#f-c").textContent = 'C -WIP-'
        document.querySelector("#temprature-convert").textContent = "Fahrenheit"
        windchill_C()
    }
    else {
        document.querySelector("#f-c").textContent = 'F'
        document.querySelector("#temprature-convert").textContent = "Celsius"
        windchill_F()
    }
}

apiFetch();


document.querySelector("#temprature-convert").addEventListener("click", convert_celsius);