document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.slide');
    const prevBtn = carousel.querySelector('.btn.prev');
    const nextBtn = carousel.querySelector('.btn.next');

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    updateCarousel();
});