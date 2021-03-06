window.addEventListener("load", () => {
  let key = "71deb6238a229a43a4ac9c6c78859f55";

  let descriptionElement = document.querySelector(".temperature-description");
  let degreeElement = document.querySelector(".temperature-degree");
  let timezoneElement = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let long = position.coords.longitude;
      let lat = position.coords.latitude;

      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
      //to do...
      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error(resp.statusText);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //   let icons = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          timezoneElement.textContent = data.name;
          degreeElement.textContent = data.main.temp;
          descriptionElement.textContent = data.weather[0].description;
          //   let imgElement = document.createElement("img");
          //   imgElement.scr = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          //   timezoneElement.appendChild(imgElement);
        })
        .catch(console.err);
    });
  }
  function setIcon(icon, iconId) {
    const skycons = new Skycons({ color: "while" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);
  }
});
