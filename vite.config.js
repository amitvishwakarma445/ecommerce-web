import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  
  base: "/ecommerce-web/",      // ⚠️ repo ka naam use karo
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),   // home page
        about: resolve(__dirname, "about.html"),  // about page
        contact: resolve(__dirname, "contact.html"), // contact page
        product: resolve(__dirname, "product.html"), // product page
        addToCart: resolve(__dirname, "addToCart.html") // add to cart page
      },
    },
  },
});
