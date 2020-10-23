//popular games

import {gamesGrid} from "./products.js";



export const POPULAR_CONTAINER = document.querySelector("#popular-container");
  

gamesGrid.filter(g => g.category == "popular").forEach((product)=> {
    POPULAR_CONTAINER.innerHTML += `
    <div class="products-games">
    <img src="${product.url}" alt="${product.alt}">
        <div class="game-info">
            <h2 class="product-name">${product.name}</h2>
            <p>Price: $ ${product.price}</p>
            <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
        </div>
    </div>
    `
});

//PC



export const PC_CONTAINER = document.querySelector("#pc-container");

gamesGrid.filter(g => g.category == "pc").forEach((product) => {
  PC_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="${product.alt}">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: $ ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//PS4



export const PS4_CONTAINER = document.querySelector("#ps4-container");


gamesGrid.filter(g => g.category == "ps4").forEach((product) => {
  PS4_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="${product.alt}">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: $ ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});

//XBOX



export const XBOX_CONTAINER = document.querySelector("#xbox-container");


gamesGrid.filter(g => g.category == "xbox").forEach((product) => {
  XBOX_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="${product.alt}">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: $ ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//SHOPPING CART____________________________________________________
export let cart = [];


//POPOUT --------------------------------------------


export const CLOSE_BTN = document.querySelector("#close-shopping-cart");
export const SHOPPING_LINK = document.querySelector("#shopping-link");
export const SHOPPING_CART_CONTAINER = document.querySelector(".shopping-cart-container");


export function openShoppingCart(event){
    event.preventDefault();

    SHOPPING_CART_CONTAINER.style.display = "grid";

}
export function closeCart (evt){
    evt.preventDefault();
    SHOPPING_CART_CONTAINER.style.display = "none";
    
}

SHOPPING_LINK.addEventListener("click", openShoppingCart);



CLOSE_BTN.addEventListener("click", closeCart);




//ADD TO / REMOVE FROM CART----------------------------------------



export let addToCartBtn = document.querySelector(".add-to-cart-btn");
export const CART_LIST_CONTAINER = document.querySelector("#cart-list-container");
let totalPriceContainer = document.querySelector("#total-price");

export let totalPrice = [];
let sum = 0;

// ADD TO CART FUNCTION ------------------------------------------------

export function addItem(evt) {
  
  if(!gamesGrid.find(product => product.id == evt.target.id)){
    return;
  }

  var foundGame = gamesGrid.find(product => product.id == evt.target.id);
  
  if(foundGame.qty === 0){
    foundGame.qty++
    cart.push(foundGame)
  } else {
    window.alert("Product is already in cart");
  }

  
  if(cart){

    CART_LIST_CONTAINER.innerHTML = ""

    sum = 0
  
    var cartContainer = ""

    itemCounter.innerHTML = ` ${cart.length} `;

    cart.forEach((productItem) =>{
      
      cartContainer+= `
      
      <div class="cart-list-item">
          <h4 class="cart-product-name">${productItem.name}</h4>
          <p class="cart-product-price"> $ ${productItem.price}</p>
          <button id="${productItem.id}" class="cart-remove-btn">Remove</button>
      </div>
      `; 

      sum += productItem.price

      totalPriceContainer.innerHTML = `
      $ ${sum}
    `
    });
    CART_LIST_CONTAINER.innerHTML = cartContainer;
  }
};




if(POPULAR_CONTAINER){
  POPULAR_CONTAINER.addEventListener("click", addItem);
}

if(PC_CONTAINER){
  PC_CONTAINER.addEventListener("click", addItem);
}

if(PS4_CONTAINER){
  PS4_CONTAINER.addEventListener("click", addItem);
}

if(XBOX_CONTAINER){
  XBOX_CONTAINER.addEventListener("click", addItem);
}




//REMOVE ITEM FUNCTION --------------------------------------------------

export function removeItem(evt) {
  
  
  if(!evt.target.id){
    return;
  }
  
  cart = cart.filter(c => c.id != evt.target.id)


  if(cart){
    CART_LIST_CONTAINER.innerHTML = ""
    
    sum = 0
    var cartContainer = ""
    itemCounter.innerHTML = ` ${cart.length} `;
    cart.forEach((productItem) =>{
      
      cartContainer+= `
      
      <div class="cart-list-item">
          <h4 class="cart-product-name">${productItem.name}</h4>
          <p class="cart-product-price"> $ ${productItem.price}</p>
          <button id="${productItem.id}" class="cart-remove-btn">Remove</button>
      </div>
      `; 

      sum += productItem.price

      

      totalPriceContainer.innerHTML = `
      $  ${sum}
    
    `
    });

    if(cart.length === 0){
      totalPriceContainer.innerHTML = `$ 0`;
    }
    
    CART_LIST_CONTAINER.innerHTML = cartContainer;
    
    return cart;
  }

  
  
};

let removeBtn = document.querySelector(".cart-remove-btn")

CART_LIST_CONTAINER.addEventListener("click", removeItem);




//CLEAR ALL FUNCTION ---------------------------------------------------------

export function clearAll(evt) {
  
  if(!evt.target.id){
    return;
  }
 
  cart = []

  sum = 0
  
  if(cart){
    CART_LIST_CONTAINER.innerHTML = ""

    itemCounter.innerHTML = ` ${cart.length} `;
    
    totalPriceContainer.innerHTML = `
      $ ${sum}
    `
    
   
  }
};

let clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", clearAll);


// ITEM COUNTER (added in the 3 functions above)



export let itemCounter = document.querySelector("#item-counter");

itemCounter.innerHTML = cart.length;


console.log(cart);