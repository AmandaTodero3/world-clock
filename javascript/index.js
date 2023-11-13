function updateTime() {
// New York
let newYorkElement= document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>] ");

//Rome
let romeElement= document.querySelector("#rome");
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");
romeDateElement.innerHTML = romeTime.format("MMMM D, YYYY");
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>] ");
}

updateTime();
setInterval(updateTime, 1000);