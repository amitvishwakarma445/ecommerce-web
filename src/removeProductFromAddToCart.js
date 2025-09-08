import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"
import { SumOfTotalCartProduct } from "./SumOfTotalCartProduct";
import { updateCartValueToUI } from "./UpdateCartValueToUI";

export const removeProductFromAddToCart = (id) => {
    const productsDataFromLS = getCartProductFromLocalStorage();

    let filteredProductData = productsDataFromLS.filter(product => product.id !== id);
    // console.log(filteredProductData);
    localStorage.setItem("cartProductLS", JSON.stringify(filteredProductData));

    // remove cart on click
    let removeCartDiv = document.getElementById(`cart${id}`);
    if(removeCartDiv){
        removeCartDiv.remove();
    }

    // .update total number of carts to cart icon
    updateCartValueToUI(filteredProductData.length);


    ///=======after removing product from addToCart the Sum of Total cart product at UI must change immediatly===============
    SumOfTotalCartProduct();
}