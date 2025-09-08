import { addToCart } from "./addToCart";
import { formatIndianCurrency } from "./formatIndianCurrency";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { showToast } from "./showToast";

const productContainer = document.getElementById("productContainer")
const productTemplate = document.getElementById("productTemplate")

export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((product) => {
        const { id, name, category, brand, price, stock, description, image } = product;
        const productClone = document.importNode(productTemplate.content, true); // true for deep copy to productClone

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productPrice").textContent = formatIndianCurrency(price);   // real price of product
        productClone.querySelector(".productActualPrice").textContent = formatIndianCurrency(price*4+0.03);

        // Product Quntinty Increment or Decrement functionaly add
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        })

        // add to cart functionality add
        productClone.querySelector(".add-to-cart-button").addEventListener('click', (event) => {
            addToCart(event, id, stock, price);
            showToast("Add", id);
        })

        productContainer.append(productClone);
    });

}