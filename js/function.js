import {API_KEY} from "./config.js"; // import API_KEY 
//console.log(API_KEY);

const loc = localStorage.getItem('location');
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
                let rain = response.list[0].weather[0].main;
                let description = response.list[0].weather[0].description;
                console.log(response.list[0].weather[0].description);
                console.log(response.list[0].weather[0].main);
                if(rain == "Rain" && description == "light rain"){
                    img.src = "/images/LightRain.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                }
                if(rain == "Clouds" && description == "overcast clouds"){
                    img.src = "/images/Cloudy.png"
                    img.alt = `${description}`;
                    weatherImg.appendChild(img);
                    img.style.cssText = "width:20vw; height: 20vh;"
                }
              
                console.log(response.list[0].rain);
				console.log(response.list);
			})
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}

geoLoc();
