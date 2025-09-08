// increment Decrement of the quantity

export const homeQuantityToggle = (event, id, stock) => {

    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuantityElement = currentCardElement.querySelector(".productQuantity");  // return element

    let productQuantity = parseInt(productQuantityElement.getAttribute("data-quantity")) || 1;   // Pehle 'data-quantity' attribute se value lo, agar null/missing hai to default 1 use karo
    // increment
    if (event.target.className === "cartIncrement") {
        if (productQuantity < stock) {
            productQuantity++;
        }
        else if (productQuantity === stock) {
            productQuantity = stock;    // stock limit cross na kare
        }
    }

    // decrement
    if (event.target.className === "cartDecrement") {
        if (productQuantity > 1) {
            productQuantity--;
        }
    }

    productQuantityElement.classList.add("flash");
    setTimeout(() => productQuantityElement.classList.remove("flash"), 300);

    // UI update: text aur attribute dono
    productQuantityElement.innerText = productQuantity;
    productQuantityElement.setAttribute("data-quantity", productQuantity);

    return productQuantity;
}