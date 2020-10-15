export let consoleList = ["PC", "PLAYSTATION", "XBOX", "COMING SOON"];

export const NAV_CONTAINER = document.querySelector(".nav-container");
export const OUR_PRODUCTS_CONTAINER = document.querySelector("#our-products-container");

consoleList.forEach (consoleName => NAV_CONTAINER.innerHTML += `
    <ul class="console-list"><li class="console-link"><a href="">${consoleName}</a></li>    
`);

consoleList.forEach (consoleName => OUR_PRODUCTS_CONTAINER.innerHTML += `
    <ul class="console-list"><li class="console-link"><a href="">${consoleName}</a></li>    
`);