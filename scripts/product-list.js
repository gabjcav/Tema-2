export let consoleList = ["PC", "PLAYSTATION", "XBOX", "NINTENDO", "DEALS", "COMING SOON"];

export const NAV_CONTAINER = document.querySelector("#nav-container");
export const OUR_PRODUCTS_CONTAINER = document.querySelector("#our-products-container");

consoleList.forEach (consoleName => NAV_CONTAINER.innerHTML += `
    <li class="console-link"><a href="">${consoleName[i]}</a></li>    
`);

