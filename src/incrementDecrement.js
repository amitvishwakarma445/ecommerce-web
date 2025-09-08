import { formatIndianCurrency } from "./formatIndianCurrency";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { SumOfTotalCartProduct } from "./SumOfTotalCartProduct";


export const incrementDecrement = (event, id, stock, price) => {

    // =================data from UI=============================
    const currentCardElement = document.querySelector(`#cart${id}`);            // return card number
    const productQuantityElement = currentCardElement.querySelector(".productQuantity");  // return element
    const productTotalPrice = currentCardElement.querySelector(".productPrice");    // product total price at UI
    // =================data from UI=============================

    // console.log(productQuantity);

    //============Product data from Local Storage=============
    let cardProductsfromLS = getCartProductFromLocalStorage();

    // =========find existing product from localstorage================
    let existingProduct = cardProductsfromLS.find(product => product.id === id);

    if (existingProduct) {
        // console.log(existingProduct);

        let quantity = existingProduct.quantity;
        let totalPrice = existingProduct.totalPrice;

        // increment
        if (event.target.classList.contains("cardIncrement")) {
            if (quantity < stock) {
                quantity++;
            }
        }

        // decrement
        if (event.target.classList.contains("cardDecrement")) {
            if (quantity > 1) {
                quantity--;
            }
        }

        //========== existing product ko update krna ==============
        existingProduct.quantity = quantity;
        totalPrice = existingProduct.totalPrice = price * quantity;
        

        //========== UI update: text aur attribute dono=============
        productQuantityElement.textContent = quantity;
        productTotalPrice.textContent = formatIndianCurrency(totalPrice);


        // =======Add animation for feedback==========================
        productQuantityElement.classList.add("flash");
        setTimeout(() => productQuantityElement.classList.remove("flash"), 300);


        // store into local storage
        localStorage.setItem("cartProductLS", JSON.stringify(cardProductsfromLS));

        //=============after increment and decrement the Sum of Total cart product at UI must change immediatly===============
        SumOfTotalCartProduct();
    }
};