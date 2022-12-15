const myYear = new Date();
console.log(myYear.getFullYear());
document.querySelector('#myYear').textContent=myYear.getFullYear();

// derive the current date using a date object
const now = new Date();

const getdatetime = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);


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


//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5334223&appid=fb8a7138d682ebc6e94fa48083ace078&units=metric"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
     
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp1').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed1').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;  
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;   
 }); 


 const apiURL2 = "//api.openweathermap.org/data/2.5/forecast/daily?id=5334223&cnt=3&appid=fb8a7138d682ebc6e94fa48083ace078"
 fetch(apiURL2)
 .then((response) => response.json())
 .then((weatherInfo2) => {   
   console.log(weatherInfo2); 
   document.getElementById('place2').innerHTML=weatherInfo2.city.name;
   document.getElementById('day1').innerHTML=weatherInfo2.list.dt[0];
   document.getElementById('temp1').innerHTML=weatherInfo2.list.temp.day[0];
   document.getElementById('day2').innerHTML=weatherInfo2.list.dt[1];
   document.getElementById('temp2').innerHTML=weatherInfo2.list.temp.day[1];
   document.getElementById('day3').innerHTML=weatherInfo2.list.dt[2];
   document.getElementById('temp3').innerHTML=weatherInfo2.list.temp.day[2];

   const iconcode = weatherInfo2.weather[0].icon;  
   const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
   document.getElementById('weather_icon').src = icon_path;   
});  
