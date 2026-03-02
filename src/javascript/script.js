const homeBtn = document.getElementById("homeBtn");
const thebandBtn = document.getElementById("thebandBtn");
const galleryBtn = document.getElementById("galleryBtn");
const eventsBtn = document.getElementById("eventsBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

thebandBtn.addEventListener("click", () => {
    window.location.href = "./theband.html";
});

galleryBtn.addEventListener("click", () => {
    window.location.href = "./gallery.html";
});

eventsBtn.addEventListener("click", () => {
    window.location.href = "./events.html";
});

contact_usBtn.addEventListener("click", () => {
    window.location.href = "./contact_us.html";
});