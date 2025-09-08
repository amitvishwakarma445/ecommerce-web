import { updateCartValueToUI } from "./UpdateCartValueToUI";

export const  getCartProductFromLocalStorage = () => {
    let cartProducts = localStorage.getItem("cartProductLS");

    if (!cartProducts) return [];

    cartProducts = JSON.parse(cartProducts);

    // show totalProducts at cart icon
    updateCartValueToUI(cartProducts.length);

    return cartProducts;
}