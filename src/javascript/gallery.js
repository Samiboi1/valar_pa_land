console.log('carousel script loaded');

document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.slide');
    const prevBtn = carousel.querySelector('.btn.prev');
    const nextBtn = carousel.querySelector('.btn.next');

    let currentIndex = 0;

    console.log('found carousel', carousel.id, slides.length);

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        console.log('updated', carousel.id, currentIndex, track.style.transform);
    }

    prevBtn.addEventListener('click', () => {
        console.log('prev clicked', carousel.id);
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        console.log('next clicked', carousel.id);
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    updateCarousel();
});