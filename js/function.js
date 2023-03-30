import {API_KEY} from "./config.js"; // import API_KEY 
//console.log(API_KEY);

const loc = localStorage.getItem('location');
document.getElementById("YourCity").innerHTML += loc;


//console.log(loc);

let lat = '';
let lon = '';


const geoLoc = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=${API_KEY}`)
    .then(response => response.json())
    .then(response => {
        lat = response[0].lat;
        lon = response[0].lon;
        //console.log(lat)    
        //console.log(lon)    
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => 
			{
				let tempereture = document.getElementById('temperature');
				let weatherImg = document.getElementById('cloud');
				tempereture.innerHTML = response.list[0].main.temp + "°C";
                const img = document.createElement('img');
                let main = response.list[0].weather[0].main;
                let description = response.list[0].weather[0].description;
                console.log(response.list[0].weather[0].description);
                console.log(response.list[0].weather[0].main);
                if(main == "Rain" && description == "light rain"){
                    img.src = "/images/LightRain.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                    img.style.cssText = "width:10vw; height: 15vh;"
                }
                else if(main == "Clouds" && description == "overcast clouds"){
                    img.src = "/images/Cloudy.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                    img.style.cssText = "width:10vw; height: 15vh;"
                }
                else if(main == "Clouds" && description == "broken clouds"){
                    img.src = "/images/Cloudy.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                    img.style.cssText = "width:10vw; height: 15vh;";
                }
                else if(main == "Clouds" && description == "scattered clouds"){
                    img.src = "/images/LowCloud.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                    img.style.cssText = "width:10vw; height: 15vh;";
                }
                else if(main == "Clear" && description == "clear sky"){
                    img.src = "/images/Sunny.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                    img.style.cssText = "width:10vw; height: 15vh;";
                }
                let minTemp = response.list[0].main.temp_min;
                document.getElementById("min-temp").innerHTML += minTemp + " °C";
                let maxTemp = response.list[0].main.temp_max;
                document.getElementById("max-temp").innerHTML += maxTemp + " °C";
                let humidity = response.list[0].main.humidity;
                document.getElementById("humidity").innerHTML += humidity + " %";
                let pressure = response.list[0].main.pressure;
                document.getElementById("pressure").innerHTML += pressure + " mb";
                let visibility = response.list[0].visibility / 1000;
                document.getElementById("visibility").innerHTML += visibility + " Km";


                //console.log(response.list[0].main)
               
				//console.log(response.list);
			})
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}

geoLoc();

const delhi = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=28.7041&lon=77.1025&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
                let minTemp = response.list[0].main.temp_min;
                document.getElementById("delhi-min-temp").innerHTML += minTemp + "°C";
                let maxTemp = response.list[0].main.temp_max;
                document.getElementById("delhi-max-temp").innerHTML += maxTemp + "°C";
                let humidity = response.list[0].main.humidity;
                document.getElementById("delhi-humidity").innerHTML += humidity + "%";
                let pressure = response.list[0].main.pressure;
                document.getElementById("delhi-pressure").innerHTML += pressure + "mb";
                let visibility = response.list[0].visibility / 1000;
                document.getElementById("delhi-visibility").innerHTML += visibility + "Km";
            console.log(response.list[0]);
                
        })
        .catch(err => console.error(err));
}
const chandighar = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=30.7333&lon=76.7794&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
                let minTemp = response.list[0].main.temp_min;
                document.getElementById("chand-min-temp").innerHTML += minTemp + "°C";
                let maxTemp = response.list[0].main.temp_max;
                document.getElementById("chand-max-temp").innerHTML += maxTemp + "°C";
                let humidity = response.list[0].main.humidity;
                document.getElementById("chand-humidity").innerHTML += humidity + "%";
                let pressure = response.list[0].main.pressure;
                document.getElementById("chand-pressure").innerHTML += pressure + "mb";
                let visibility = response.list[0].visibility / 1000;
                document.getElementById("chand-visibility").innerHTML += visibility + "Km";
            console.log(response.list[0]);
                
        })
        .catch(err => console.error(err));
}
const mumbai = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=19.0760&lon=72.8777&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
                let minTemp = response.list[0].main.temp_min;
                document.getElementById("mumbai-min-temp").innerHTML += minTemp + "°C";
                let maxTemp = response.list[0].main.temp_max;
                document.getElementById("mumbai-max-temp").innerHTML += maxTemp + "°C";
                let humidity = response.list[0].main.humidity;
                document.getElementById("mumbai-humidity").innerHTML += humidity + "%";
                let pressure = response.list[0].main.pressure;
                document.getElementById("mumbai-pressure").innerHTML += pressure + "mb";
                let visibility = response.list[0].visibility / 1000;
                document.getElementById("mumbai-visibility").innerHTML += visibility + "Km";
            console.log(response.list[0]);
                
        })
        .catch(err => console.error(err));
}
delhi();
chandighar();
mumbai();
