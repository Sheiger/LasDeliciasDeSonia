
let current = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const total = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active-dot');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active-dot');
}

function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + total) % total;
    showSlide(current)
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        current = index;
        showSlide(current);
    })
})

setInterval(nextSlide, 5000);