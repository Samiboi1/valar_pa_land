const homeBtn = document.getElementById("homeBtn");
const about_usBtn = document.getElementById("about_usBtn");
const eventsBtn = document.getElementById("eventsBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
});

about_usBtn.addEventListener("click", () => {
    window.location.href = "./about_us.html";
});

eventsBtn.addEventListener("click", () => {
    window.location.href = "./events.html";
});

contact_usBtn.addEventListener("click", () => {
    window.location.href = "./contact_us.html";
});