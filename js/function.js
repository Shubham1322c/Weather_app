import {API_KEY} from "./config.js"; // import API_KEY 
console.log(API_KEY);

const loc = localStorage.getItem('location');
console.log(loc);

let lat = '';
let lon = '';

const geoLoc = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=${API_KEY}`)
    .then(response => response.json())
    .then(response => {
        lat = response[0].lat;
        lon = response[0].lon;
        console.log(lat)    
        console.log(lon)    
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}

geoLoc();
