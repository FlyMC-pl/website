const WronaSkin = document.getElementById("wrona-skin");
let RandomTime = Math.floor(Math.random() * 10000);
const FeedMenu = document.getElementById("down-bar");

setInterval(() => {
    WronaSkin.src = "../assets/wrona-art-bigger-closed-eyes.png";
    setTimeout(() => {
        WronaSkin.src = "../assets/wrona-art-bigger.png";
    }, 100)
}, RandomTime)

function CloseFeedMenu() {
    FeedMenu.style.display = "none";
}

function OpenFeedMenu(arg) {
    FeedMenu.style.display = "block";
    if (arg === "eat") {
        document.getElementById("needs-div-title").textContent = "Jedzenie";
        document.getElementById("tenp-text").textContent = "Ziarna";
        document.getElementById("fifteenp-text").textContent = "Chleb";
        document.getElementById("thirtyp-text").textContent = "Ślimaki";
        document.getElementById("fourtyp-text").textContent = "Frytki";
    }
    if (arg === "sleep") {
        document.getElementById("needs-div-title").textContent = "Sen";
        document.getElementById("tenp-text").textContent = "Drzemka";
        document.getElementById("fifteenp-text").textContent = "Spanko";
        document.getElementById("thirtyp-text").textContent = "Hibernacja";
        document.getElementById("fourtyp-text").textContent = "Uśpij";
    }
    if (arg === "clean") {
        document.getElementById("needs-div-title").textContent = "Czystość";
        document.getElementById("tenp-text").textContent = "Prysznic";
        document.getElementById("fifteenp-text").textContent = "Kąpiel";
        document.getElementById("thirtyp-text").textContent = "Jacuzzi";
        document.getElementById("fourtyp-text").textContent = "AquaPark";
    }
}