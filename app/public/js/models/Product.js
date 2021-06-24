System.register([], function (exports_1, context_1) {
    "use strict";
    var Product;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Product = class Product {
                constructor(name, value) {
                    this.name = name;
                    this.value = value;
                }
                ;
            };
            exports_1("Product", Product);
        }
    };
});
