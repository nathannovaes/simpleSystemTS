System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, customerController, productController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            customerController = new index_1.CustomerController();
            document
                .querySelector('#form-customer')
                .addEventListener('submit', customerController.add.bind(customerController));
            productController = new index_1.ProductController();
            document
                .querySelector('#form-product')
                .addEventListener('submit', productController.add.bind(productController));
        }
    };
});
