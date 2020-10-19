//popular games


export let popularGamesGrid = [
  {
    name: "FIFA 21",
    price: 59.99,
    url: '/img/cover/ps4/NEWS/193479.png',
    id: 1
  },
  {
    name: "FARCRY 5 - GOLD EDITION",
    price: 39.99,
    url: '/img/cover/ps4/NEWS/farcry.jpg',
    id: 2
  },
  {
    name: "GRAND THEFT AUTO V",
    price: 35.99,
    url: '/img/cover/ps4/NEWS/gta.jpeg',
    id: 3
  },
  {

    name: "CALL OF DUTY: MODERN WARFARE",
    price: 49.99,
    url: '/img/cover/ps4/NEWS/mw.jpg',
    id: 4
  },
  ];

export const POPULAR_CONTAINER = document.querySelector("#popular-container");
  

popularGamesGrid.forEach((product)=> {
    POPULAR_CONTAINER.innerHTML += `
    <div class="products-games">
    <img src="${product.url}" alt="">
        <div class="game-info">
            <h2 class="product-name">${product.name}</h2>
            <p>Price: ${product.price}</p>
            <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
        </div>
    </div>
    `
});

//PC

export let pcGamesGrid = [
  {
    name: "SQUAD",
    price: 39.99,
    url: '/img/cover/pc/squad.jpg',
    id: 5
  },
  
  {
    name: "GRAND THEFT AUTO V",
    price: 35.99,
    url: '/img/cover/pc/gta.jpg',
    id: 6
  },
  {
    name: "CALL OF DUTY: COLD WAR",
    price: 69.99,
    url: '/img/cover/pc/codcw.jpeg',
    id: 7
  },
  {

    name: "BATTLEFIELD V",
    price: 45.99,
    url: '/img/cover/pc/bf5.jpg',
    id: 8
  }
];

export const PC_CONTAINER = document.querySelector("#pc-container");

pcGamesGrid.forEach((product)=> {
  PC_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//PS4

export let ps4GamesGrid = [
  {
    name: "FIFA 21",
    price: 59.99,
    url: '/img/cover/ps4/NEWS/193479.png',
    id: 9
  },
  {
    name: "FARCRY 5 - GOLD EDITION",
    price: 39.99,
    url: '/img/cover/ps4/NEWS/farcry.jpg',
    id: 10
  },
  {
    name: "GRAND THEFT AUTO V",
    price: 35.99,
    url: '/img/cover/ps4/NEWS/gta.jpeg',
    id: 11
  },
  {

    name: "CALL OF DUTY: MODERN WARFARE",
    price: 49.99,
    url: '/img/cover/ps4/NEWS/mw.jpg',
    id: 12
  },
  
];

export const PS4_CONTAINER = document.querySelector("#ps4-container");


ps4GamesGrid.forEach((product)=> {
  PS4_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//XBOX

export let xboxGamesGrid = [
  {
    name: "JUST CAUSE 4",
    price: 59.99,
    url: '/img/cover/xbox/JC4.jpg',
    id: 13
  },
  {
    name: "SEA OF THIEVES",
    price: 29.99,
    url: '/img/cover/xbox/SOT.jpg',
    id: 14
  },
  {
    name: "FARCRY 5 - DELUXE EDITION",
    price: 55.99,
    url: '/img/cover/xbox/FARCRY5DELUXE.jpg',
    id: 15
  },
  {

    name: "FIFA 21 - CHAMPIONS EDITION",
    price: 79.99,
    url: '/img/cover/xbox/fifa21.png_large',
    id: 16
  }
];

export const XBOX_CONTAINER = document.querySelector("#xbox-container");


xboxGamesGrid.forEach((product)=> {
  XBOX_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: ${product.price}</p>
          <button id="${product.id}" class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//SHOPPING CART 

let cart = [];


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


export let addToCartBtn = document.querySelector(".add-to-cart-btn");
export const CART_LIST_CONTAINER = document.querySelector("#cart-list-container");




export function addItem(evt){
  let foundPopular = popularGamesGrid.find(product => product.id === evt.target.id);
  cart.push(foundPopular);
  
  

};

if(POPULAR_CONTAINER){
  POPULAR_CONTAINER.addEventListener("click", addItem);
}

