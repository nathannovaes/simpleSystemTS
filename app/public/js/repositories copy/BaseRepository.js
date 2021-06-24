System.register([], function (exports_1, context_1) {
    "use strict";
    var BaseRepository;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BaseRepository = class BaseRepository {
                constructor() {
                    this._collection = [];
                }
                add(model) {
                    this._collection.push(model);
                }
                getAll() {
                    return [].concat(this._collection);
                }
            };
            exports_1("BaseRepository", BaseRepository);
        }
    };
});
