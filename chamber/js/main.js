
const myYear = new Date();
console.log(myYear.getFullYear());
document.querySelector('#myYear').textContent=myYear.getFullYear();


const currentdate = document.querySelector("#currentdate");
// derive the current date using a date object
const now = new Date();

const getdatetime = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

currentdate.innerHTML = getdatetime;

// get the last modified date and time
const dateTime = document.lastModified;
// create a template literal to combine the text and date and time
document.querySelector('#lastMod').textContent  = `Last Updated: ${dateTime}`;


//function to create a hamburger menu
function toggleMenu(){
    document.getElementById('menuNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const dayNumber = myYear.getDay();
const herojoin = document.getElementById("herojoin");

if (dayNumber ==  1 || dayNumber == 2) {    
    herojoin.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    herojoin.classList.add("showme");
} else {
    herojoin.classList.add("hideme");
}

//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=1835327&appid=fb8a7138d682ebc6e94fa48083ace078&units=metric"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
     
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;  
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;   
 }); 

