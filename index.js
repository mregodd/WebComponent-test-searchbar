import { SearchBar } from "./components/SearchBar.js";

customElements.define("search-bar", SearchBar);

const searchProducts = document.getElementById("searchProducts");

searchProducts.addEventListener("search-input", ({ detail: ev }) => {
    console.log(ev);
});