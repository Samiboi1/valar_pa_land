const homeBtn = document.getElementById("homeBtn");
const band_infoBtn = document.getElementById("band_infoBtn");
const band_picturesBtn = document.getElementById("band_picturesBtn");
const future_eventsBtn = document.getElementById("future_eventsBtn");
const past_eventsBtn = document.getElementById("past_eventsBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

band_infoBtn.addEventListener("click", () => {
    window.location.href = "./band_info";
});

band_picturesBtn.addEventListener("click", () => {
    window.location.href = "./band_pictures";
});

future_eventsBtn.addEventListener("click", () => {
    window.location.href = "./future_events";
});

past_eventsBtn.addEventListener("click", () => {
    window.location.href = "./past_events";
});