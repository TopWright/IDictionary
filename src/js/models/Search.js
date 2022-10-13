import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const result = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.query}`);
            this.result = result.data;
            //console.log(this.result);
        } catch {
            alert(`Word Not found or Network error. Try again. Thanks...`);
        }
    }

}
