var searchButton = document.getElementById("search-button")
var city = document.getElementById("city")
var API = "88b7b8bf3efc94cb404ff20897080b30"
searchButton.addEventListener("click",function(e){
    e.preventDefault()
    var cityName = city.value
    getCurrentForecast(cityName)
})



function getCurrentForecast(city){
    console.log(city)
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`
    console.log(queryURL)
    fetch(queryURL)
    .then(response => response.json())
    .then(apiData => {
        console.log(apiData)
    })

}