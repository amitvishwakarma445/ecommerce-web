// get reference of add to cart

// update total carts at cart icon

export const updateCartValueToUI = (totalProducts) => {
    let cardValue = document.querySelector("#cartValue");
    return (cardValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${totalProducts}`);
};

// 👇 alternative method
// export const updateCartValueToUI = (totalProducts) => {
//     const cartElement = document.querySelector("#cartValue");
//     if (cartElement) {
//         cartElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${totalProducts}`;
//     } else {
//         console.warn("Cart element not found in DOM.");
//     }
// };