//popular games

export let popularGamesGrid = [
    {
      name: "FIFA 21",
      price: "59,99 USD",
      url: '/img/cover/ps4/NEWS/193479.png'
    },
    {
      name: "FARCRY 5 - GOLD EDITION",
      price: "39,99 USD",
      url: '/img/cover/ps4/NEWS/farcry.jpg'
    },
    {
      name: "GRAND THEFT AUTO V",
      price: "35,99 USD",
      url: '/img/cover/ps4/NEWS/gta.jpeg'
    },
    {

        name: "CALL OF DUTY: MODERN WARFARE",
        price: "49,99 USD",
        url: '/img/cover/ps4/NEWS/mw.jpg'
      }
  ];

export const POPULAR_CONTAINER = document.querySelector("#popular-container");
  

popularGamesGrid.forEach((product)=> {
    POPULAR_CONTAINER.innerHTML += `
    <div class="products-games">
    <img src="${product.url}" alt="">
        <div class="game-info">
            <h2 class="product-name">${product.name}</h2>
            <p>Price: ${product.price}</p>
            <button class="add-to-cart-btn"> Add to cart</button>
        </div>
    </div>
    `
});

//PC

export let pcGamesGrid = [
  {
    name: "SQUAD",
    price: "39,99 USD",
    url: '/img/cover/pc/squad.jpg'
  },
  {
    name: "GRAND THEFT AUTO V",
    price: "35,99 USD",
    url: '/img/cover/pc/gta.jpg'
  },
  {
    name: "CALL OF DUTY: COLD WAR",
    price: "69,99 USD",
    url: '/img/cover/pc/codcw.jpeg'
  },
  {

      name: "BATTLEFIELD V",
      price: "45,99 USD",
      url: '/img/cover/pc/bf5.jpg'
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
          <button class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//PS4

export let ps4GamesGrid = [
  {
    name: "FIFA 21",
    price: "59,99 USD",
    url: '/img/cover/ps4/NEWS/193479.png'
  },
  {
    name: "FARCRY 5 - GOLD EDITION",
    price: "39,99 USD",
    url: '/img/cover/ps4/NEWS/farcry.jpg'
  },
  {
    name: "GRAND THEFT AUTO V",
    price: "35,99 USD",
    url: '/img/cover/ps4/NEWS/gta.jpeg'
  },
  {

    name: "CALL OF DUTY: MODERN WARFARE",
    price: "49,99 USD",
    url: '/img/cover/ps4/NEWS/mw.jpg'
  }
];

export const PS4_CONTAINER = document.querySelector("#ps4-container");


ps4GamesGrid.forEach((product)=> {
  PS4_CONTAINER.innerHTML += `
  <div class="products-games">
  <img src="${product.url}" alt="">
      <div class="game-info">
          <h2 class="product-name">${product.name}</h2>
          <p>Price: ${product.price}</p>
          <button class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});


//XBOX

export let xboxGamesGrid = [
  {
    name: "FIFA 21",
    price: "59,99 USD",
    url: '/img/cover/ps4/NEWS/193479.png'
  },
  {
    name: "FARCRY 5 - GOLD EDITION",
    price: "39,99 USD",
    url: '/img/cover/ps4/NEWS/farcry.jpg'
  },
  {
    name: "GRAND THEFT AUTO V",
    price: "35,99 USD",
    url: '/img/cover/ps4/NEWS/gta.jpeg'
  },
  {

    name: "CALL OF DUTY: MODERN WARFARE",
    price: "49,99 USD",
    url: '/img/cover/ps4/NEWS/mw.jpg'
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
          <button class="add-to-cart-btn"> Add to cart</button>
      </div>
  </div>
  `
});