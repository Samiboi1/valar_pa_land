const homeBtn = document.getElementById("homeBtn");
const bandBtn = document.getElementById("bandBtn");
const galleryBtn = document.getElementById("galleryBtn");
const futureBtn = document.getElementById("futureBtn");
const pastBtn = document.getElementById("pastBtn");
const contact_usBtn = document.getElementById("contact_usBtn");

homeBtn.addEventListener("click", () => {
    window.location.href = "./";
});

bandBtn.addEventListener("click", () => {
    window.location.href = "./band.html";
});

galleryBtn.addEventListener("click", () => {
    window.location.href = "./gallery.html";
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