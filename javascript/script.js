const homeBtn = document.getElementById("homeBtn");
const about_usBtn = document.getElementById("about_usBtn");
const eventsBtn = document.getElementById("eventsBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "https://samiboi1.github.io/valar_pa_land/";
});

about_usBtn.addEventListener("click", () => {
    window.location.href = "https://samiboi1.github.io/valar_pa_land/about_us.html";
});

eventsBtn.addEventListener("click", () => {
    window.location.href = "https://samiboi1.github.io/valar_pa_land/events.html";
});

contact_usBtn.addEventListener("click", () => {
    window.location.href = "https://samiboi1.github.io/valar_pa_land/contact_us.html";
});