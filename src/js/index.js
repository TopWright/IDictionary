import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

////////////////////////////////////////
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
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    ctrlSearch();
    searchView.pageChange();
    searchView.clearResults();
})





let item = [...document.querySelectorAll('.list-item')];
item.forEach(item => {
    let wordItem = item.childNodes[1].textContent;
    item.addEventListener('click', async () => {
        // Change page to veiw Result On mobile
        searchView.pageChange();
        searchView.clearResults();
        renderLoader();

        // Get word and pass into the function Const
        let word = new Search(wordItem);
        // Get the result from API
        await word.getResults();
        console.log(word.result);

        // searchView.clearResult();
        clearLoader();
        searchView.renderResults(word.result);
    })
})

