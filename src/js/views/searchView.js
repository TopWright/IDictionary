import { elements } from "./base";

export const getInputResult = () => {
    if (elements.searchInput.value) elements.searchInput.value;

    return elements.searchInput.value;
}

export const clearInput = () => {
    elements.searchInput.value = "";
};

export const clearResults = () => {
    let items = document.querySelectorAll('.items')

    items.forEach(el => {
        el.remove();
    })

    document.querySelector('.title').textContent = "";
    document.querySelector('.tone').textContent = "";

    elements.pOs.textContent = "";
    elements.pOs2.textContent = "";
    elements.pOs3.textContent = "";

    elements.example.childNodes[1].textContent = "";
    elements.example2.childNodes[1].textContent = "";
    elements.example3.childNodes[1].textContent = "";

    elements.synonym.childNodes[1].textContent = "";
    elements.synonym2.childNodes[1].textContent = "";
    elements.synonym3.childNodes[1].textContent = "";

    elements.antonym.childNodes[1].textContent = "";
    elements.antonym2.childNodes[1].textContent = "";
    elements.antonym3.childNodes[1].textContent = "";

    elements.reference.textContent = '';

};

let app = document.querySelector('.def-items');

export const renderWord = (word) => {
    elements.word.textContent = word.word;

    word.phonetics.forEach((el) => {
        elements.phonetic.textContent = el.text;
        elements.sound.style.display = `block`
    });

    word.sourceUrls.forEach((el) => {
        let ref = `<a href="${el}" target="_blank">Learn More</a>`;
        elements.reference.innerHTML = ref;
    });

    word.meanings.forEach((el) => {

        if (el.partOfSpeech === "noun") {
            templateLoader(
                el,
                elements.pOs,
                elements.definitions,
                elements.examples,
                elements.synonyms,
                elements.antonyms,
                elements.example,
                elements.synonym,
                elements.antonym
            )
        }

        if (el.partOfSpeech === "verb") {
            templateLoader(
                el,
                elements.pOs2,
                elements.definitions2,
                elements.examples2,
                elements.synonyms2,
                elements.antonyms2,
                elements.example2,
                elements.synonym2,
                elements.antonym2
            )
        }

        if (el.partOfSpeech === "adjective") {
            templateLoader(
                el,
                elements.pOs3,
                elements.definitions3,
                elements.examples3,
                elements.synonyms3,
                elements.antonyms3,
                elements.example3,
                elements.synonym3,
                elements.antonym3
            )
        }
    });

};


const templateLoader = (el, elPOS, elDef, elExm, elSyn, elAnt, exmText, synText, antText) => {
    el.definitions.length = 7;
    elPOS.textContent = el.partOfSpeech;

    let nodes = el.definitions.map(cur => {
        let listItems = document.createElement('li');
        listItems.textContent = cur.definition;
        listItems.classList.add('items')

        return listItems
    })
    elDef.append(...nodes);
    removeUndefined(elDef);

    let nodes2 = el.definitions.map(cur => {
        let listItems = document.createElement('li');

        if (cur.example) {
            exmText.childNodes[1].textContent = `Use Cases`;
            listItems.textContent = cur.example;
            listItems.classList.add('items')
        } else {
            listItems.style.display = 'none';
        }

        return listItems
    })
    elExm.append(...nodes2);
    removeUndefined(elExm);

    let nodes3 = el.synonyms.map(cur => {
        if (cur) {
            synText.childNodes[1].textContent = `Synonyms`;
            let listItems = document.createElement('li');
            if (cur) listItems.textContent = cur;
            listItems.classList.add('items')

            return listItems
        }
    })
    elSyn.append(...nodes3);
    removeUndefined(elSyn);


    let nodes4 = el.antonyms.map(cur => {
        if (cur) {
            antText.childNodes[1].textContent = `Antonyms`;
            let listItems = document.createElement('li');
            if (cur) listItems.textContent = cur;
            listItems.classList.add('items')

            return listItems
        }
    })
    elAnt.append(...nodes4);
    removeUndefined(elAnt);

};

const removeUndefined = (el) => {
    el.childNodes.forEach(el => {
        if (el.textContent == 'undefined') {
            el.textContent = '';
        }
    })
};

export const renderResults = (words) => {
    if (words) {
        words.forEach(renderWord);
    }
};

export const pageChange = () => {
    elements.page.style.left = `0%`;

    elements.prevPage.addEventListener("click", () => {
        elements.page.style.left = `100%`;
    });
};
