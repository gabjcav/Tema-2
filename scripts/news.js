const NEWS = document.querySelector(".news-container");


function showNews(){
    NEWS.innerHTML += `
        <img id="news-id" src="./img/posters/fifa-21-poster.jpg>"
    `;

};

showNews();