const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '976044478emsh5b45eadf6343f29p104e59jsn9569abf3a4a8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)



    .then(response => response.json())
        .then((response) => {

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            humidity.innerHTML = response.humidity
            feels_like.innerHTML = response.feels_like
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            console.log(response)
        })
        .catch(err => console.error(err));

    getWeather(city)

}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Dhanbad");