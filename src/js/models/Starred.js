
export default class Starred {
    constructor() {
        this.starred = [];
    }

    addStarred(word) {
        this.starred.push(word);

        // Store in local Storage
        this.storeStarred();

        return word;
    }

    deleteStarred(word) {
        const element = this.starred.findIndex(el => el === word);
        this.starred.splice(element, 1);

        // Store in local Storage
        this.storeStarred
    }

    isStarred(word) {
        return this.starred.findIndex(el => el === word) !== -1;
    }

    getNumStarred() {
        return this.starred.length;
    }

    storeStarred() {
        localStorage.setItem('starredWords', JSON.stringify(this.starred));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('starredWords'));

        // Restoring likes from the localStorage
        if (storage) this.words = storage;
        return storage
    }
}