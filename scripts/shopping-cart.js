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
export const ADD_TO_CART_BTN = document.querySelector(".add-to-cart-btn");
export const CART_LIST_CONTAINER = document.querySelector(".cart-list-container");

export let popularGamesGrid = [
    {
      name: "FIFA 21",
      price: 59.99,
      url: '/img/cover/ps4/NEWS/193479.png'
    },
    {
      name: "FARCRY 5 - GOLD EDITION",
      price: 39.99,
      url: '/img/cover/ps4/NEWS/farcry.jpg'
    },
    {
      name: "GRAND THEFT AUTO V",
      price: 35.99,
      url: '/img/cover/ps4/NEWS/gta.jpeg'
    },
    {
  
      name: "CALL OF DUTY: MODERN WARFARE",
      price: 49.99,
      url: '/img/cover/ps4/NEWS/mw.jpg'
    },
    ];


    export function addItem(evt){
        evt.preventDefault();
        popularGamesGrid.forEach((product) => {
            CART_LIST_CONTAINER.innerHTML += `
            <li class="cart-list-item" id="cart-info">
            <h4 class="cart-product-name">${product.name}</h4>
            <p class="cart-product-price">${product.price}</p>
            
            </li>
            `
            console.log(product.name);
        })
    };


    ADD_TO_CART_BTN.addEventListener("click", addItem);