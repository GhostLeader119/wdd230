function windchill_F(){
    const tempature = 39 // Calacs run in F
    const wind_speed = 5 // Calcs run in mph
    let windchill = 'N/A'
    if (tempature <= 50 && wind_speed > 3 ) {
        console.log('System functional');
        windchill = 35.74 + 0.6215 * tempature - 35.75 * (wind_speed ** 0.16) + 0.4275 * tempature * (wind_speed ** 0.16)
        windchill = Math.round(windchill)
    }
    document.querySelector("#tempature-input").textContent = tempature
    document.querySelector("#wind-speed").textContent = wind_speed + " MPH"
    document.querySelector("#wind-chill").textContent = windchill
}
function windchill_C(){
    const tempature = 39 // Calacs run in C
    const wind_speed = 5 // Calcs run in kph
    let windchill = 'N/A'
    if (tempature <= 10 && wind_speed > 4.8){
        console.log('System functional');
        windchill = 35.74 + 0.6215 * tempature - 35.75 * (wind_speed ** 0.16) + 0.4275 * tempature * (wind_speed ** 0.16)
        windchill = Math.round(windchill)
    }
    document.querySelector("#tempature-input").textContent = tempature
    document.querySelector("#wind-speed").textContent = wind_speed + " KPH"
    document.querySelector("#wind-chill").textContent = windchill
}
function convert_celsius(){
    console.log('Toggle between C and F');
    let current_status = document.querySelector('#f-c').textContent
    console.log(`Current_status = ${current_status}`);
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

console.log('System: windchill.js loaded...');
windchill_F()
document.querySelector("#temprature-convert").addEventListener("click", convert_celsius);