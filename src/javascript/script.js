const homeBtn = document.getElementById("homeBtn");
const bandBtn = document.getElementById("bandBtn");
const picturesBtn = document.getElementById("picturesBtn");
const futureBtn = document.getElementById("futureBtn");
const pastBtn = document.getElementById("pastBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

bandBtn.addEventListener("click", () => {
    window.location.href = "./band.html";
});

picturesBtn.addEventListener("click", () => {
    window.location.href = "./pictures.html";
});

futureBtn.addEventListener("click", () => {
    window.location.href = "./future.html";
});

pastBtn.addEventListener("click", () => {
    window.location.href = "./past.html";
});

contact_usBtn.addEventListener("click", () => {
    window.location.href = "./contact_us.html";
});