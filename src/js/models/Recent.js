
export default class RecentWord {
    constructor() {
        this.words = [];
    }

    addWord(word) {
        if (this.words.indexOf(word) === -1) {
            this.words.push(word);

            if (this.words.length >= 11) {
                this.words.shift();
            }
        }

        this.storeWord();

        return word;

    }

    storeWord() {
        localStorage.setItem('recent-words', JSON.stringify(this.words));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('recent-words'));

        // Restoring likes from the localStorage
        if (storage) this.words = storage;
        return storage
    }
}
