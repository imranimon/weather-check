// On first load always show tthe current weather of dhaka
const API_KEY = 'adb316087053d49b3f1a231a615b71c2'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error))

function setData(data) {
    const displayTag = document.getElementById('display')
    displayTag.innerHTML = `
    <div class="weather-status text-white text-center">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h1>${data.name}</h1>
                <h3><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
                <h1 class="lead">${data.weather[0].main}</h1>
            </div>
    `
}

const searchWeather = () => {
    const city = document.getElementById('cityName')
    const cityName = city.value;
    city.value = ''
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.log(error))

}