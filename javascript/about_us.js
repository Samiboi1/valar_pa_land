
const track = document.querySelector('.band-carousel');
const slides = document.querySelectorAll('.band img');
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});
