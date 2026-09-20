
import './cart.scss'


// ==========================
// КОРЗИНА
// ==========================

const cart = document.querySelector('.cart')
const cartIcon = document.querySelector('.header__button')
const wrapper = document.querySelector('.wrapper')


// Відкриття / закриття корзини

const cartActive = (e) => {

    const btnActive = e.target.closest('.cart-action')

    if (!btnActive || !cart) return

    if (!cart.classList.contains('--active')) {

        openCart()

        wrapper.classList.add('wrapper--active')

        return
    }

    cart.classList.add('--closing')

    wrapper.classList.remove('wrapper--active')
}

document.addEventListener('click', cartActive)


function openCart() {

    const iconRect = cartIcon.getBoundingClientRect()

    const x =
        iconRect.left +
        iconRect.width / 2 -
        window.innerWidth / 2

    const y =
        iconRect.top +
        iconRect.height / 2 -
        window.innerHeight / 2

    cart.style.setProperty('--cart-x', `${x}px`)
    cart.style.setProperty('--cart-y', `${y}px`)

    cart.classList.remove('--closing')
    cart.classList.add('--active')
}


cart.addEventListener('animationend', (e) => {

    if (e.animationName === 'cart-close') {

        cart.classList.remove('--active', '--closing')
    }
})


// ==========================
// ЕЛЕМЕНТИ КОРЗИНИ
// ==========================

const cartItems = document.querySelector('.cart__items')
const cartTemplate = document.querySelector('#cart-item-template')
const cartCounter = document.querySelector('.cart-counter')
const cartTotal = document.querySelector('[data-fls-cart-total]')


// ==========================
// ГОЛОВНИЙ CLICK
// ==========================

document.addEventListener('click', (e) => {


    // --------------------------
    // ДОДАТИ ТОВАР
    // --------------------------

    const addButton =
        e.target.closest('[data-fls-addtocart-button]')

    if (addButton) {

        const product = {

            id: addButton.dataset.id,

            title: addButton.dataset.title,

            price: addButton.dataset.price,

            image: addButton.dataset.image,
        }


        // Перевіряємо, чи товар вже є

        const existingItem =
            cartItems.querySelector(
                `.cart__item[data-id="${product.id}"]`
            )


        if (existingItem) {

            const quantityInput =
                existingItem.querySelector(
                    '[data-fls-addtocart-quantity]'
                )

            quantityInput.value =
                +quantityInput.value + 1


            const priceElement =
                existingItem.querySelector(
                    '[data-fls-cart-price]'
                )

            const price =
                Number(priceElement.dataset.price)

            const quantity =
                Number(quantityInput.value)


            priceElement.textContent =
                price * quantity
                updateCart()
        } else {

            addProductCart(product)
        }


        // Запускаємо політ картинки

        addToCart(addButton)

        return
    }


    // --------------------------
    // ВИДАЛИТИ ТОВАР
    // --------------------------

    const removeButton =
        e.target.closest('.cart__remove')

    if (removeButton) {

        const item =
            removeButton.closest('.cart__item')

        if (!item) return

        item.remove()

        updateCart()

        return
    }


    // --------------------------
    // ЗМІНА КІЛЬКОСТІ
    // --------------------------

    const quantityButton =
        e.target.closest(
            '[data-fls-quantity-plus], [data-fls-quantity-minus]'
        )

    if (quantityButton) {

        const item =
            quantityButton.closest('.cart__item')

        if (!item) return


        // Даємо FLS Quantity змінити input

        setTimeout(() => {

            const quantityInput =
                item.querySelector(
                    '[data-fls-addtocart-quantity]'
                )

            const priceElement =
                item.querySelector(
                    '[data-fls-cart-price]'
                )

            const quantity =
                Number(quantityInput.value)

            const price =
                Number(priceElement.dataset.price)


            priceElement.textContent =
                price * quantity


            updateCart()

        }, 0)

        return
    }

})


// ==========================
// ДОДАТИ КАРТКУ В КОРЗИНУ
// ==========================

function addProductCart(product) {

    const emptyMessage =
        cartItems.querySelector('.cart__void')

    if (emptyMessage) {
        emptyMessage.remove()
    }


    const item =
        cartTemplate.content.cloneNode(true)

    const cartItem =
        item.querySelector('.cart__item')


    cartItem.dataset.id =
        product.id


    const image =
        cartItem.querySelector(
            '.cart__item-img img'
        )

    image.src =
        product.image

    image.alt =
        product.title


    cartItem.querySelector(
        '.cart__item-title'
    ).textContent =
        product.title


    const priceElement =
        cartItem.querySelector(
            '[data-fls-cart-price]'
        )

    priceElement.textContent =
        product.price

    priceElement.dataset.price =
        product.price


    cartItem.querySelector(
        '[data-fls-addtocart-quantity]'
    ).value = 1


    cartItems.append(item)

    updateCart()
}


// ==========================
// ОНОВИТИ КОРЗИНУ
// ==========================

function updateCart() {

    const items =
        cartItems.querySelectorAll('.cart__item')

    const count =
        items.length


    if (count === 0) {

        cartCounter.classList.remove(
            'cart--has-products'
        )

        cartCounter.textContent = ''

        cartTotal.textContent = '0'


        const emptyMessage =
            cartItems.querySelector('.cart__void')


        if (!emptyMessage) {

            cartItems.insertAdjacentHTML(
                'beforeend',
                '<span class="cart__void">Корзина порожня</span>'
            )
        }

        return
    }


    cartCounter.textContent =
        count

    cartCounter.classList.add(
        'cart--has-products'
    )


    const emptyMessage =
        cartItems.querySelector('.cart__void')

    if (emptyMessage) {
        emptyMessage.remove()
    }


    let total = 0


    items.forEach((item) => {

        const priceElement =
            item.querySelector(
                '[data-fls-cart-price]'
            )

        total +=
            Number(priceElement.textContent)

    })


    cartTotal.textContent =
        total
}


// ==========================
// ПОЛІТ КАРТИНКИ
// ==========================

function addToCart(addToCartButton) {

    // Якщо кнопка вже заблокована —
    // нічого не робимо

    if (addToCartButton.disabled) return


    addToCartButton.disabled = true


    const addToCart =
        document.querySelector(
            '[data-fls-addtocart]'
        )


    const addToCartProduct =
        addToCartButton.closest(
            '[data-fls-addtocart-product]'
        )


    if (!addToCart || !addToCartProduct) {

        addToCartButton.disabled = false

        return
    }


  const addToCartImage =
    addToCartProduct.querySelector('.heets__card-img img')
      

    if (!addToCartImage) {

        addToCartButton.disabled = false

        return
    }


    const flyImgSpeed =
        +addToCartImage.dataset.flsAddtocartImage || 1500


    const imageRect =
        addToCartImage.getBoundingClientRect()


    const cartRect =
        addToCart.getBoundingClientRect()


    const flyImg =
        document.createElement('img')


    flyImg.src =
        addToCartImage.src

console.log('FLY IMG:', flyImg.src)
    flyImg.style.cssText = `
        position: fixed;
        left: ${imageRect.left}px;
        top: ${imageRect.top}px;
        width: ${imageRect.width}px;
        transition: all ${flyImgSpeed}ms;
        z-index: 100;
    `


    document.body.append(flyImg)


    requestAnimationFrame(() => {

        flyImg.style.left =
            `${cartRect.left}px`

        flyImg.style.top =
            `${cartRect.top}px`

        flyImg.style.width =
            `0px`

        flyImg.style.opacity =
            `0`
    })


    setTimeout(() => {

        flyImg.remove()

        addToCartButton.disabled =
            false

    }, flyImgSpeed)
}

