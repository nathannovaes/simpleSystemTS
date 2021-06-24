System.register(["../repositories/index", "../services/index", "../views/ProductsView"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, ProductsView_1, ProductController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (ProductsView_1_1) {
                ProductsView_1 = ProductsView_1_1;
            }
        ],
        execute: function () {
            ProductController = class ProductController {
                constructor() {
                    this._inputName = document.querySelector('#product-name');
                    this._inputValue = document.querySelector('#product-value');
                    this._productService = new index_2.ProductService(new index_1.ProductRepository());
                    this._productsView = new ProductsView_1.ProductsView('#productsTable');
                }
                add(event) {
                    try {
                        event.preventDefault();
                        this._productService.create(String(this._inputName.value), Number(this._inputValue.value));
                        const productsCollection = this._productService.getAll();
                        this._productsView.refreshTable(productsCollection);
                    }
                    catch (error) {
                        console.log('Error:', error.message);
                    }
                }
            };
            exports_1("ProductController", ProductController);
        }
    };
});
