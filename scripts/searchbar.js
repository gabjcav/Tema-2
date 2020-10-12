export let searchBar = document.querySelector(".searchbar");

searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});

