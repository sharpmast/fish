// Підключення функціоналу "Чертоги Фрілансера"
import { FLS } from "@js/common/functions.js";
// Docs: https://www.npmjs.com/package/gsap
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
// Стилі модуля
import './gsap.scss'

function gsapInit() {
	// Example
	const chars = document.querySelectorAll('[data-fls-splittype][data-fls-gsap] .char')
	console.log(chars);
	gsap.from(chars, {
		opacity: 0.2,
		y: 10,
		duration: 0.5,
		stagger: { amount: 3 },
	})
}

document.querySelector('[data-fls-gsap]') ?
	window.addEventListener('load', gsapInit) : null


