const apiKey = "f42d672fd7526af9968448c78ac08c13";

// const searchBtn = document.querySelector("#searchBtn");
let userInput = "London";
const ulEl = document.querySelector("#ul-list");
const cityName = document.querySelector("#city-name");
const currentDay = document.querySelector("#today");
const temp = document.querySelector("#temperature");
const humid = document.querySelector("#humidity");
const uvIndex = document.querySelector("#uv-index");
const wind = document.querySelector("#wind")
let searchBtn = document.querySelector('#searchBtn');
const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=imperial`;


const forecastIcon = document.querySelector("#icon1")
const forecastTemp = document.querySelector("#temp1")
const forecastWind = document.querySelector("#wind1")
const forecastHum = document.querySelector("#hum1")
const forecastDay1 = document.querySelector("#day1")

const forecastIcon1 = document.querySelector("#icon2")
const forecastTemp1 = document.querySelector("#temp2")
const forecastWind1 = document.querySelector("#wind2")
const forecastHum1 = document.querySelector("#hum2")
const forecastDay2 = document.querySelector("#day2")

const forecastIcon2 = document.querySelector("#icon3")
const forecastTemp2 = document.querySelector("#temp3")
const forecastWind2 = document.querySelector("#wind3")
const forecastHum2 = document.querySelector("#hum3")
const forecastDay3 = document.querySelector("#day3")

const forecastIcon3 = document.querySelector("#icon4")
const forecastTemp3 = document.querySelector("#temp4")
const forecastWind3 = document.querySelector("#wind4")
const forecastHum3 = document.querySelector("#hum4")
const forecastDay4 = document.querySelector("#day4")

const forecastIcon4 = document.querySelector("#icon5")
const forecastTemp4 = document.querySelector("#temp5")
const forecastWind4 = document.querySelector("#wind5")
const forecastHum4 = document.querySelector("#hum5")
const forecastDay5 = document.querySelector("#day5")


// if (searchBtn) {
//     userInput = searchBtn.value.trim();
// }
 console.log(userInput)

const getApi = () => {
    fetch(requestUrl)
        .then(response => {
            if(response.ok) {
                console.log('Success');
            } else {
                console.log('Failed');
            }
            return response.json();
        })
        .then(data1 => {
            let tempData = data1.main.temp;
            let windData = data1.wind.speed;
            let humData = data1.main.humidity;
            let latData = data1.coord.lat;
            let lonData = data1.coord.lon;

            console.log(data1);

            temp.innerHTML = tempData;
            wind.innerHTML = windData;
            humid.innerHTML = humData

            const requestUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latData}&lon=${lonData}&exclude=hourly,daily,minutely,alerts&appid=${apiKey}&units=imperial`; 

            return fetch(requestUrl2)
        })
        .then(response => {
            if(response.ok) {
                console.log('Success');
            } else {
                console.log('Failed');
            }
            return response.json();
        })
        .then(data2 => {
            console.log(data2)
            let ultraV = data2.current.uvi

            uvIndex.innerHTML = ultraV 

            const requestUrl3 = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${apiKey}&units=imperial`; 

            return fetch(requestUrl3)
        })
        .then(response => {
            if(response.ok) {
                console.log('Success');
            } else {
                console.log('Failed');
            }
            return response.json();
        })
        .then(data3 => {
            console.log(data3)

            let dayData2 = data3.list[1].dt_txt
            let tempData2 = data3.list[1].main.temp
            let windData2 = data3.list[1].wind.speed
            let humData2 = data3.list[1].main.humidity

            let dayData3 = data3.list[2].dt_txt
            let tempData3 = data3.list[2].main.temp
            let windData3 = data3.list[2].wind.speed
            let humData3 = data3.list[2].main.humidity

            let dayData4 = data3.list[3].dt_txt
            let tempData4 = data3.list[3].main.temp
            let windData4 = data3.list[3].wind.speed
            let humData4 = data3.list[3].main.humidity

            let dayData5 = data3.list[4].dt_txt
            let tempData5 = data3.list[4].main.temp
            let windData5 = data3.list[4].wind.speed
            let humData5= data3.list[4].main.humidity

            let dayData6 = data3.list[5].dt_txt
            let tempData6 = data3.list[5].main.temp
            let windData6 = data3.list[5].wind.speed
            let humData6 = data3.list[5].main.humidity

            forecastIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data3.list[1].weather[0].icon}.png" />` 
            forecastTemp.innerHTML = tempData2 + "<span> &#8457</span"
            forecastWind.innerHTML = windData2  + "<span> MPH</span>"
            forecastHum.innerHTML = humData2 + "<span>%</span>"
            forecastDay1.innerHTML = dayData2

            forecastIcon1.innerHTML = `<img src="https://openweathermap.org/img/w/${data3.list[2].weather[0].icon}.png" />`
            forecastTemp1.innerHTML = tempData3 + "<span> &#8457</span"
            forecastWind1.innerHTML = windData3 + "<span> MPH</span>"
            forecastHum1.innerHTML = humData3 + "<span>%</span>"
            forecastDay2.innerHTML = dayData3

            forecastIcon2.innerHTML = `<img src="https://openweathermap.org/img/w/${data3.list[3].weather[0].icon}.png" />`
            forecastTemp2.innerHTML = tempData4 + "<span> &#8457</span"
            forecastWind2.innerHTML = windData4 + "<span> MPH</span>"
            forecastHum2.innerHTML = humData4 + "<span>%</span>"
            forecastDay3.innerHTML = dayData4

            forecastIcon3.innerHTML = `<img src="https://openweathermap.org/img/w/${data3.list[4].weather[0].icon}.png" />`
            forecastTemp3.innerHTML = tempData5 + "<span> &#8457</span"
            forecastWind3.innerHTML = windData5 + "<span> MPH</span>"
            forecastHum3.innerHTML = humData5 + "<span>%</span>"
            forecastDay4.innerHTML = dayData5

            forecastIcon4.innerHTML = `<img src="https://openweathermap.org/img/w/${data3.list[5].weather[0].icon}.png" />`
            forecastTemp4.innerHTML = tempData6 + "<span> &#8457</span"
            forecastWind4.innerHTML = windData6 + "<span> MPH</span>"
            forecastHum4.innerHTML = humData6 + "<span>%</span>"
            forecastDay5.innerHTML = dayData6
        }) 
}

let isToday = moment().format("M / D / YYYY");
currentDay.innerHTML = isToday;

searchBtn.addEventListener("click", getApi);