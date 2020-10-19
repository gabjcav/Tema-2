//POPOUT 


export const CLOSE_BTN = document.querySelector("#close-shopping-cart");
export const SHOPPING_CART_ICON = document.querySelector("#shopping-cart-icon");
export const SHOPPING_CART_CONTAINER = document.querySelector(".shopping-cart-container");


export function openShoppingCart(event){
    event.preventDefault();

    SHOPPING_CART_CONTAINER.style.display = "grid";

}
export function closeCart (evt){
    evt.preventDefault();
    SHOPPING_CART_CONTAINER.style.display = "none";
    
}

SHOPPING_CART_ICON.addEventListener("click", openShoppingCart);



CLOSE_BTN.addEventListener("click", closeCart);

console.log(closeCart);


//ADD ITEMS

import {POPULAR_CONTAINER} from "./front-page-games.js";

export let addToCartBtn = document.querySelector(".add-to-cart-btn");
export const CART_LIST_CONTAINER = document.querySelector("#cart-list-container");




    export function addItem(evt){
        evt.preventDefault();
        console.log(evt);

    };


    addToCartBtn.addEventListener("click", addItem);

