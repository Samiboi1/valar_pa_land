const homeBtn = document.getElementById("homeBtn");
const bandinfoBtn = document.getElementById("bandinfoBtn");
const bandpicturesBtn = document.getElementById("bandpicturesBtn");
const futureeventsBtn = document.getElementById("futureeventsBtn");
const pasteventsBtn = document.getElementById("pasteventsBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

bandinfoBtn.addEventListener("click", () => {
    window.location.href = "./bandinfo.html";
});

bandpicturesBtn.addEventListener("click", () => {
    window.location.href = "./bandpictures.html";
});

futureeventsBtn.addEventListener("click", () => {
    window.location.href = "./futureevents.html";
});

pasteventsBtn.addEventListener("click", () => {
    window.location.href = "./pastevents.html";
});

contact_usBtn.addEventListener("click", () => {
    window.location.href = "./contact_us.html";
});