import { elements } from "./base";

export const getword = () => elements.word.textContent;

export const displayRecentWords = (arr) => {

    if (arr) {

        let filteredArr = arr.filter((el, index) => {
            return arr.indexOf(el) === index;
        })

        filteredArr.forEach(el => {
            let markUp = ` 
            <li class="list-item flex space-btw align-items">
                <h1 class="it word">${el}</h1>
                <i class="fa-solid fa-arrow-right-long"></i>
            </li>
        `;

            elements.recNotice.insertAdjacentHTML('afterend', markUp)
        });

    }
}
