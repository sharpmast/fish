/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Autoplay, Pagination,Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Підключення базових стилів
import "./slider.scss";
// Повний набір стилів з node_modules
//import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.heets__slider')) { // <- Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.heets__slider', { // <- Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay,Pagination,Navigation],
			// observer: true,
			// observeParents: true,
			slidesPerView:6,
			spaceBetween:20,
			//autoHeight:true,
			speed: 700,
			//centeredSlides:true,

			//touchRatio: 1,
			//simulateTouch: false,
			loop:false,
			slidesPerGroup:1,
			//preloadImages: true,
			//lazy: true,

			
			// Ефекти
		 //effect: 'fade',
		// autoplay:false,
			autoplay: {
				delay: 3000,
				disableOnInteraction:true,
			},
			

			// Пагінація
		
			pagination: {
				el: '.heets__slider-pagination',
				clickable: true,
			},
			

			// Скроллбар
			
			// scrollbar: {
			// 	el: '.customer__scrollbar',
			// 	draggable: true,
			// },
			

			//Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.heets__slider-arrow-prev',
				nextEl: '.heets__slider-arrow-next',
			},
			
			// Брейкпоінти
			breakpoints: {
					300: {
					slidesPerView: 1
					
				},
					475: {
					slidesPerView: 2,
					centeredSlides:false,
					loop:true,
					
				},
				600: {
					slidesPerView: 3,
					centeredSlides:true,
					loop:true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					centeredSlides:true,
					loop:true,
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
			},

			// Події
			on: {

			}
		});
		
	}
		if (document.querySelector('.say__cards')) { // <- Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.say__cards', { // <- Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay,Pagination,Navigation],
			// observer: true,
			// observeParents: true,
			slidesPerView:2,
			spaceBetween:20,
			//autoHeight:true,
			speed: 800,
			//centeredSlides:true,

			//touchRatio: 1,
			//simulateTouch: false,
			loop:false,
			slidesPerGroup:1,
			//preloadImages: true,
			//lazy: true,

			
			// Ефекти
		 //effect: 'fade',
		// autoplay:false,
			autoplay: {
				delay: 3000,
				disableOnInteraction:true,
			},
			

			// Пагінація
		
			pagination: {
				el: '.say__slider-pagination',
				clickable: true,
			},
			

			// Скроллбар
			
			// scrollbar: {
			// 	el: '.customer__scrollbar',
			// 	draggable: true,
			// },
			

			//Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.say__prev',
				nextEl: '.say__next',
			},
			
			// Брейкпоінти
			breakpoints: {
					300: {
					slidesPerView: 1,
					loop:true,
					
				},
					475: {
					slidesPerView: 1,
					centeredSlides:false,
					loop:true,
					
				},
				790: {
					slidesPerView: 2,
					centeredSlides:false,
					loop:true,
				},
				890: {
					slidesPerView: 2,
					spaceBetween: 20,
					loop:true,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

			// Події
			on: {

			}
		});
		
	}

}

document.querySelector('[data-fls-slider]') ?
	window.addEventListener("load", initSliders) : null