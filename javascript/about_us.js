const track = document.querySelector('.band-carousel');
const slides = document.querySelectorAll('.band img');
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

let currentIndex = 0;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

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

track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    prevTranslate = currentTranslate;
    track.style.transition = 'none';
});

track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    currentTranslate = prevTranslate - diffX * 0.8;
});

track.addEventListener('touchend', () => {
    isDragging = false;
    track.style.transition = 'transform 0.5s ease';

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -50 && currentIndex < slides.length - 1) {
        currentIndex += 1;
    } else if (movedBy > 50 && currentIndex > 0) {
        currentIndex -= 1;
    }
    updateCarousel();
});

track.addEventListener('touchmove', (e) => {
    e.stopPropagation();
}, { passive: false });
