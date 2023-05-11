export const elements = {
    formBody: document.querySelector('.form-box'),
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search-input'),
    result: document.querySelector('.word-details'),
    preLoader: document.querySelector('.preloader'),
    word: document.querySelector('.title'),
    phonetic: document.querySelector('.tone'),
    sound: document.querySelector('.sound'),
    defaultPage: document.querySelector('.back-btn'),
    page: document.querySelector('.pad'),
    prevPage: document.querySelector('.back-btn'),
    pOs: document.querySelector('.part-of-speech'),
    pOs2: document.querySelector('.part-of-speech2'),
    pOs3: document.querySelector('.part-of-speech3'),
    reference: document.querySelector('.more-info'),
    favList: document.querySelector('.fav-list'),
    list: document.querySelector('.list'),
    star: document.querySelector('.star'),
    favNotice: document.querySelector('.fav-notice'),
    recNotice: document.querySelector('.recent-notice'),
    favBtn: document.querySelector('.icon-starred'),
    msg: document.querySelector('.msg'),
    backBtn: document.querySelector('.canel'),


    example: document.querySelector('.examples'),
    synonym: document.querySelector('.synonyms'),
    antonym: document.querySelector('.antonyms'),

    example2: document.querySelector('.examples2'),
    synonym2: document.querySelector('.synonyms2'),
    antonym2: document.querySelector('.antonyms2'),

    example3: document.querySelector('.examples3'),
    synonym3: document.querySelector('.synonyms3'),
    antonym3: document.querySelector('.antonyms3'),

    definitions: document.querySelector('.def-items'),
    examples: document.querySelector('.exam-items'),
    synonyms: document.querySelector('.syn-items'),
    antonyms: document.querySelector('.ant-items'),

    definitions2: document.querySelector('.def-items2'),
    examples2: document.querySelector('.exam-items2'),
    synonyms2: document.querySelector('.syn-items2'),
    antonyms2: document.querySelector('.ant-items2'),

    definitions3: document.querySelector('.def-items3'),
    examples3: document.querySelector('.exam-items3'),
    synonyms3: document.querySelector('.syn-items3'),
    antonyms3: document.querySelector('.ant-items3'),

    indexPage: document.querySelector('.search-match'),
    FavPage: document.querySelector('.Fav-words'),
    info: document.querySelector('.info'),
    infoPage: document.querySelector('.info-page'),
    mainMenuBtn: document.querySelector('.canel'),

}

export const renderLoader = () => {
    elements.preLoader.style.display = 'block'
}

export const clearLoader = () => {
    elements.preLoader.style.display = 'none'
}

export const displayFavPage = () => {
    elements.indexPage.style.display = 'none';
    elements.infoPage.style.display = 'none';
    elements.FavPage.style.display = 'block';
    elements.info.style.display = 'none';
}

export const displayInfoPage = () => {
    elements.indexPage.style.display = 'none';
    elements.FavPage.style.display = 'none';
    elements.infoPage.style.display = 'block';
    elements.info.style.display = 'flex';
}

export const displayMainPage = () => {
    elements.indexPage.style.display = 'block';
    elements.infoPage.style.display = 'none';
    elements.FavPage.style.display = 'none';
    elements.info.style.display = 'none';
}