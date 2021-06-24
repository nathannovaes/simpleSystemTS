System.register([], function (exports_1, context_1) {
    "use strict";
    var Customer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Customer = class Customer {
                constructor(name, city) {
                    this.name = name;
                    this.city = city;
                }
                ;
            };
            exports_1("Customer", Customer);
        }
    };
});
