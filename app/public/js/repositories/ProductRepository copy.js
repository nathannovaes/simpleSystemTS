System.register(["../models/index", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var index_1, BaseRepository_1, ProductRepository;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (BaseRepository_1_1) {
                BaseRepository_1 = BaseRepository_1_1;
            }
        ],
        execute: function () {
            ProductRepository = class ProductRepository extends BaseRepository_1.BaseRepository {
                create(name, value) {
                    this._product = new index_1.Product(name, value);
                    this.store(this._product);
                    return this._product;
                }
                store(product) {
                    this.add(product);
                }
            };
            exports_1("ProductRepository", ProductRepository);
        }
    };
});
