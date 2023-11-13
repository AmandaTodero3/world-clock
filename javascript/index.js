function updateTime() {
// New York
let newYorkElement= document.querySelector("#new-york");
if (newYorkElement){
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>] ");

//Rome
let romeElement= document.querySelector("#rome");
if(romeElement){
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");
romeDateElement.innerHTML = romeTime.format("MMMM D, YYYY");
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>] ");
}
}
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
 citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <a href="index.html">All Cities</a>`;
}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);