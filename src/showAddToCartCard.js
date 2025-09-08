import { getCartProductFromLocalStorage } from './getCartProductFromLocalStorage'
import './style.css'
import products from '../api/products.json'
import { formatIndianCurrency } from './formatIndianCurrency';
import { removeProductFromAddToCart } from './removeProductFromAddToCart';
import { incrementDecrement } from './incrementDecrement';
import { SumOfTotalCartProduct } from './SumOfTotalCartProduct';
import { showToast } from './showToast';


// get data from local storage
let cardProducts = getCartProductFromLocalStorage();

// console.log(cardProducts);
// console.log(products);

// working fine
// let cardProductsId = new Set(cardProducts.map(c => c.id))
// let filteredProducts = products.filter(product => cardProductsId.has(product.id))
// console.log(filteredProducts);

// easy and readable
let filteredProducts = products.filter(product => {
    return cardProducts.some(cardProduct => cardProduct.id === product.id);
})
// console.log(filteredProducts);

// to update the card page
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filteredProducts.forEach(filterProduct => {
        const { category, id, image, name, stock, price } = filterProduct;

        // clone 
        let productClone = document.importNode(templateContainer.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `cart${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;

        // total price and total quantity ko ui pr add krna hai.-> need (localStrogedata = cardProducts)
        cardProducts.forEach(cardProduct => {
            if (cardProduct.id === id) {
                productClone.querySelector(".productQuantity").textContent = cardProduct.quantity;
                productClone.querySelector(".productPrice").textContent = formatIndianCurrency(cardProduct.totalPrice);
            }
        })
        
        // increment and decrement
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);  //real products ka data hai 
        })

        // handle remove button
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", ()=>{
            removeProductFromAddToCart(id);
            showToast("Remove", id);        // add a yast message
        })

        // cart container me insert(append) kr de productClone ko
        cartElement.appendChild(productClone);
    });
}

// ==========show card products data to UI================
showCartProduct();  //necessary to call at the time of page load.



// =========find total sum of added product of cart=============
SumOfTotalCartProduct();