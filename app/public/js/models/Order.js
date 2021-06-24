System.register([], function (exports_1, context_1) {
    "use strict";
    var Order;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Order = class Order {
                constructor(customerId, orderProducts) {
                    this.customerId = customerId;
                    this.orderProducts = orderProducts;
                }
                ;
            };
            exports_1("Order", Order);
        }
    };
});
