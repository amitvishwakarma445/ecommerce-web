// src/index.js

import "./style.css";
import product from "../api/products.json";
import { showProductContainer } from "./homeProductCard";
import { highlightActiveLink } from "./highlightActiveLink";


    highlightActiveLink();
    
    // Display products on the home page
    showProductContainer(product);
