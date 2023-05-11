import Search from './models/Search';
import RecentWord from './models/Recent';
import Starred from './models/Starred';
import * as searchView from './views/searchView';
import * as recentView from './views/recentView';
import * as starredView from './views/StarredView';

import {
    elements,
    renderLoader,
    clearLoader,
    displayFavPage,
    displayInfoPage,
    displayMainPage
} from './views/base';

const state = {};
window.state = state;


// //////////////////////////////////////
// ALL WORDS CONTROLLER
// //////////////////////////////////////
const ctrlClicked = () => {
    let items = [...document.querySelectorAll('.list-item')]
    items.forEach(el => {
        el.addEventListener('click', () => {
            let child = el.childNodes[1].textContent
            ctrlSearchClicked(child);
        })
    })
}



const ctrlSearchClicked = async (word) => {
    searchView.pageChange();
    renderLoader();
    searchView.clearResults();

    word = new Search(word);

    try {
        await word.getResults();

        // Render Results On the UI
        clearLoader();
        searchView.renderResults(word.result);
    } catch (error) {
        alert(`${error}: Network Error`);
    }
}



///////////////////////////////////////
//  SEARCH CONTROLLER
////////////////////////////////////////
const ctrlSearch = async () => {
    // Get Query
    const word = searchView.getInputResult();
    searchView.clearInput();
    renderLoader();

    if (word) {
        // Add new search object to state
        state.search = new Search(word);

        try {
            await state.search.getResults();
            // Render Results On the UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert(`${error}: Network Error`);
        }
    }

}


////////////////////////////////////////
// RECENT WORDS CONTROLLER
////////////////////////////////////////

state.word = new RecentWord();
const ctrlRecent = () => {
    const word = recentView.getword();

    // --- Add word to State
    if (word) {

        state.word.addWord(word);

        // --- Store in Local Storage
        state.word.storeWord(word);

    }

}

let recentArr = state.word.readStorage();
// --- Display Words list in the UI
recentView.displayRecentWords(recentArr);

elements.recNotice.addEventListener('click', () => {
    window.location.reload();
})


// Function for Search and recent Controls
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    ctrlSearch();
    ctrlRecent();
    searchView.pageChange();
    searchView.clearResults();

})



////////////////////////////////////////
// FAVOURITE / STARRED WORDS CONTROLLER
////////////////////////////////////////
if (!state.starred) state.starred = new Starred();
const controlStarred = () => {
    // --- Get word
    const word = recentView.getword();

    if (!state.starred.isStarred(word) && word) {
        // --- Add Starred word to state
        state.starred.addStarred(word);

        // --- Toggle the Starred
        starredView.toggleStarBtn();

        // --- Display Starred words on the UI
        state.starred.storeStarred(word)
    } else {
        // --- Remove from State
        state.starred.deleteStarred(word);

        // --- Toggle the Starred
        starredView.toggleStarBtn();

        // --- Remoe from UI
        state.starred.storeStarred(word)

    }
}

elements.star.addEventListener('click', () => {
    controlStarred();
})

let staredArr = state.starred.readStorage();
// --- Display Words list in the UI
starredView.displayFavWords(staredArr)


////////////////////////////////////////
// PAGE CONTROLLER
////////////////////////////////////////
elements.formBody.addEventListener('click', e => {
    if (e.target.matches('.fa-star, .icon-starred *')) {
        displayFavPage();

        // --- Get words from Local Storage
        let favArr = state.starred.readStorage();

        if (favArr) {
            // --- Display Words list in the UI
            recentView.displayRecentWords(favArr);
        }



        // --- Display word Contents from API
        ctrlClicked();

    } else if (e.target.matches('.fa-circle-info, .icon-info *')) {

        displayInfoPage();

    } else if (e.target.matches('.canel')) {

        displayMainPage();

    }

})

ctrlClicked();
const ctrlClicked2 = () => {
    let items = [...document.querySelectorAll('.items')]
    console.log(items);
    items.forEach(el => {
        el.addEventListener('click', () => {
            ctrlSearchClicked(el);
        })
    })
}
ctrlClicked2();

elements.backBtn.addEventListener('click', () => {
    window.location.reload()
})
