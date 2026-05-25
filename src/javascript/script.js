const homeBtn = document.getElementById("homeBtn");
const membersBtn = document.getElementById("membersBtn");
const picturesBtn = document.getElementById("picturesBtn");
const future_eventsBtn = document.getElementById("future_eventsBtn");
const past_eventsBtn = document.getElementById("past_eventsBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

membersBtn.addEventListener("click", () => {
    window.location.href = "./members";
});

picturesBtn.addEventListener("click", () => {
    window.location.href = "./pictures";
});

future_eventsBtn.addEventListener("click", () => {
    window.location.href = "./future_events";
});

past_eventsBtn.addEventListener("click", () => {
    window.location.href = "./past_events";
});