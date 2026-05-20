const homeBtn = document.getElementById("homeBtn");
const band_infoBtn = document.getElementById("band_infoBtn");
const band_picturesBtn = document.getElementById("band_picturesBtn");
const future_eventsBtn = document.getElementById("future_eventsBtn");
const past_eventsBtn = document.getElementById("past_eventsBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

band_infoBtn.addEventListener("click", () => {
    window.location.href = "./band_info.html";
});

band_picturesBtn.addEventListener("click", () => {
    window.location.href = "./band_pictures.html";
});

future_eventsBtn.addEventListener("click", () => {
    window.location.href = "./future_events.html";
});

past_eventsBtn.addEventListener("click", () => {
    window.location.href = "./past_events.html";
});

contact_usBtn.addEventListener("click", () => {
    window.location.href = "./contact_us.html";
});