System.register([], function (exports_1, context_1) {
    "use strict";
    var OrderProduct;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            OrderProduct = class OrderProduct {
                constructor(name, value, quantity) {
                    this.name = name;
                    this.value = value;
                    this.quantity = quantity;
                }
                ;
                get total() {
                    return this.quantity * this.value;
                }
            };
            exports_1("OrderProduct", OrderProduct);
        }
    };
});
