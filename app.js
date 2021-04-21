window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api =`${proxy}api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={71deb6238a229a43a4ac9c6c78859f55}`;

    fetch(api)
.then(response=>{
return response.json();
})
.then(data =>{
    console.log(data);
    const {temperature, summary, icon} = data.currently;
    //set DOM elements from Api
    temperatureDegree.textContent=temperature;
    temperatureDescription.textContent=summary;
    locationTimezone.textContent = data.timezone;
    //set Icon
    setIcon(icon, document.querySelector(".icon"));
});
});

}
function setIcon (icon, iconId){
    const skycons = new Skycons({color:"while"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);
}
});