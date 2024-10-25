import {infoCards} from "infoCards.js";


const article = document.getElementById('cardBuilding');
// const articleCardTitle = document.createElement('h3');
// const articleCardInfo = document.createElement('p');
// articleCardTitle.classList.add("card-title");
// articleCardInfo.classList.add("card-info");
// article.appendChild(articleCardTitle);
// article.appendChild(articleCardInfo);


article.innerHTML = `
    ${infoCards()}
`
