const homeBtn = document.getElementById("homeBtn");
const the_bandBtn = document.getElementById("the_bandBtn");
const picturesBtn = document.getElementById("picturesBtn");
const future_eventsBtn = document.getElementById("future_eventsBtn");
const past_eventsBtn = document.getElementById("past_eventsBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "https://valarpaland.se/home";
});

future_eventsBtn.addEventListener("click", () => {
    window.location.href = "https://valarpaland.se/future_events";
});

past_eventsBtn.addEventListener("click", () => {
    window.location.href = "https://valarpaland.se/past_events";
});

the_bandBtn.addEventListener("click", () => {
    window.location.href = "https://valarpaland.se/the_band";
});

picturesBtn.addEventListener("click", () => {
    window.location.href = "https://valarpaland.se/pictures";
});