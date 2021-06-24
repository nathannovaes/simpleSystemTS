System.register([], function (exports_1, context_1) {
    "use strict";
    var ProductService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ProductService = class ProductService {
                constructor(productRepository) {
                    this.productRepository = productRepository;
                    this._productRepository = productRepository;
                }
                create(name, value) {
                    return this._productRepository.create(name, value);
                }
                getAll() {
                    return this._productRepository.getAll();
                }
            };
            exports_1("ProductService", ProductService);
        }
    };
});
