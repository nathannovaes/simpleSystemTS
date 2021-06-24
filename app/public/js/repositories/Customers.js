class Collection {
    constructor() {
        this._collection = [];
    }
    add(model) {
        this._collection.push(model);
    }
    getAll() {
        return [].concat(this._collection);
    }
}
