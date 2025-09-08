import { formatIndianCurrency } from "./formatIndianCurrency";
import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage"
import { parseIndianCurrencyToNumber } from "./parseIndianCurrencyToNumber";


export const SumOfTotalCartProduct = () =>{
    // get total cart product from local storage
    let cartProductDataFromLS = getCartProductFromLocalStorage();

    let sumOfTotalAddedCartProduct = 0
    cartProductDataFromLS.forEach(product => {
        sumOfTotalAddedCartProduct += product.totalPrice;
    })

    // let sumOfTotalAddedCartProduct = cartProductDataFromLS.reduce((totalSum, product) => {
    //     return totalSum += product.totalPrice
    // }, 0);

    let tax = parseIndianCurrencyToNumber(document.querySelector(".productTax").textContent); // get value from tax element

    // update to UI subsection
    document.querySelector(".productSubTotal").textContent = formatIndianCurrency(sumOfTotalAddedCartProduct);

    let sumWithTex = sumOfTotalAddedCartProduct + tax;

    document.querySelector(".productFinalTotal").textContent = formatIndianCurrency(sumWithTex);
}