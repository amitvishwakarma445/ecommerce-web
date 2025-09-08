import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage";
import { updateCartValueToUI } from "./UpdateCartValueToUI";

getCartProductFromLocalStorage();

export const addToCart = (event, id, stock, unitPrice) => {

    let arrLocalStorageProduct = getCartProductFromLocalStorage();  //returns array

    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    let quantity = currentCardElement.querySelector(".productQuantity").innerText;


    // console.log(quantity, price);
    quantity = Number(quantity);       // convert into number
    let totalPrice = Number((unitPrice * quantity).toFixed(2));  // convert into number
    

    // before push into local storage, check duplicates id must not add into local storage again
    let existingProduct = arrLocalStorageProduct.find(product => product.id === id);
    if (existingProduct) {
        existingProduct.quantity = quantity;
        existingProduct.totalPrice = totalPrice;
    }
    else {
        arrLocalStorageProduct.push({ id, quantity, totalPrice, unitPrice});
    }
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));  // price and unitPrice are number in database

    // update UI add to card
    let totalProducts = arrLocalStorageProduct.length;
    updateCartValueToUI(totalProducts);
} 