import { elements } from "./base";

export const displayFavWords = (arr) => {

    if (arr) {
        let filteredArr = arr.filter((el, index) => {
            return arr.indexOf(el) === index;
        })

        filteredArr.forEach(el => {
            let markUp = ` 
            <li class="list-item flex space-btw align-items">
                <h1 class="it">${el}</h1>
                <i class="fa-solid fa-arrow-right-long"></i>
            </li>
        `;

            elements.favNotice.insertAdjacentHTML('beforeend', markUp);
            elements.msg.textContent = '';
            elements.favNotice.style.marginTop = '2rem'

        });

    }
}

export const toggleStarBtn = () => {
    if (elements.star.classList.contains('fa-regular')) {
        elements.star.classList.remove('fa-regular');
        elements.star.classList.add('fa-solid');
    } else {
        elements.star.classList.add('fa-regular');
        elements.star.classList.remove('fa-solid');
    }
}

