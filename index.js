
import { slidesData } from "./slidesData.js"; // Предполагается, что у вас есть slidesData.js файл

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    if (!swiperWrapper) {
        console.error('swiper-wrapper element not found');
        return;
    }

    // Создание и добавление слайдов
    slidesData.forEach(slide => {
        const slideElement = document.createElement('div');
        slideElement.className = 'swiper-slide';
        slideElement.innerHTML = `
            <div class="slide-icon">
                <img src="${slide.iconNumber}" alt="Slide icon">
            </div>
            <div class="slide-content">
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-subtitle">${slide.subtitle}</p>
            </div>
        `;
        swiperWrapper.appendChild(slideElement);
    });

    // Инициализация Swiper
    const swiper = new Swiper('.swiper', {
        loop: true,
        grabCursor: true,
        speed: 1500,
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },
    });
});
