const LoadingPageDiv = document.getElementById("loading-page-div");
const LoadingPageText = document.getElementById("loading-page-text");
const LoadingTexts = [
    "dc.flymc.pl",
    "flymc.pl/regulamin",
    "flymc.pl/sklep"
]
LoadingPageText.textContent = LoadingTexts[Math.floor(Math.random()*LoadingTexts.length)];;
setTimeout(() => {
    LoadingPageDiv.style.display = "none";
}, 1900)

setTimeout(() => {
    document.body.style.overflowY = "scroll";
}, 1000)

function OnLoad() {
    console.log("Loaded! | Website created by Wrona#0655");
}

setTimeout(() => {
    LoadingPageDiv.style.display = "none";
}, 2700)

function ShowHelloDiv() {
    const HelloDiv = document.getElementById("hello-div");
    HelloDiv.style.display = "block";
    setTimeout(() => {
        HelloDiv.style.opacity = "1";
      }, 500)
}

function HideHelloDiv() {
    const HelloDiv = document.getElementById("hello-div");
    HelloDiv.style.opacity = "0";
    setTimeout(() => {
        HelloDiv.style.display = "none";
      }, 1000)
}

const server = true;
const ServerActiveDot = document.getElementById("server-active-dot");
const ServerActiveText = document.getElementById("server-active-text");
if (server === false) {
    ServerActiveDot.style.backgroundColor = "rgb(255, 36, 36)";
    ServerActiveText.style.color = "rgb(255, 36, 36)";
    ServerActiveText.textContent = "OFFLINE"
}
if (server === true) {
    //ServerActiveDot.style.backgroundColor = "#1BFA01";
    //ServerActiveText.style.color = "#1BFA01";
    //ServerActiveText.textContent = "1/100"
}