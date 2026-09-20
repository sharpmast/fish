// Підключення функціоналу "Чертоги Фрілансера"
// import { FLS } from "@js/common/functions.js";

// import "./addtocart.scss"

// function addToCart() {

// 	document.addEventListener('click', addToCartAction)

// 	function addToCartAction(e) {

//     const targetElement = e.target

//     if (targetElement.closest('[data-fls-addtocart-button]')) {

//         const addToCartButton = targetElement.closest('[data-fls-addtocart-button]')

//         if (addToCartButton.disabled) return

//         addToCartButton.disabled = true

//         let addToCart = document.querySelector('[data-fls-addtocart]')

//         const addToCartProduct = addToCartButton.closest('[data-fls-addtocart-product]')

//         if (addToCartProduct) {

//             const addToCartImage =
//                 addToCartProduct.querySelector('[data-fls-addtocart-image]')
// 			addToCart.classList.add('cart--has-products')
//             addToCartImage
//                 ? addToCartImageFly(addToCartImage, addToCart, addToCartButton)
//                 : null

//            // addToCart.innerHTML = +addToCart.innerHTML + 1

//         } else {

//            // addToCart.innerHTML = +addToCart.innerHTML + 1

//             setTimeout(() => {
//                 addToCartButton.disabled = false
//             }, 500)
//         }
//     }
// }

// function addToCartImageFly(addToCartImage, addToCart, addToCartButton) {

//     const flyImgSpeed = +addToCartImage.dataset.flsAddtocartImage || 1500

//     const imageRect = addToCartImage.getBoundingClientRect()
//     const cartRect = addToCart.getBoundingClientRect()

//     const flyImg = document.createElement('img')

//     flyImg.src = addToCartImage.src

//     flyImg.style.cssText = `
//         position: fixed;
//         left: ${imageRect.left}px;
//         top: ${imageRect.top}px;
//         width: ${imageRect.width}px;
//         transition: all ${flyImgSpeed}ms;
//         z-index: 100;
//     `

//     document.body.append(flyImg)

//     requestAnimationFrame(() => {
//         flyImg.style.left = `${cartRect.left}px`
//         flyImg.style.top = `${cartRect.top}px`
//         flyImg.style.width = `0px`
//         flyImg.style.opacity = `0`
//     })

//     setTimeout(() => {
//         flyImg.remove()
//         addToCartButton.disabled = false
//     }, flyImgSpeed)
// }
// }


// document.querySelector('[data-fls-addtocart]') ?
// 	window.addEventListener('load', addToCart) : null