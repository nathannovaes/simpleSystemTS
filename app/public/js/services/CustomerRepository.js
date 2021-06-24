System.register(["../models/Customer"], function (exports_1, context_1) {
    "use strict";
    var Customer_1, CustomerService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            }
        ],
        execute: function () {
            CustomerService = class CustomerService {
                create(name, city) {
                    return new Customer_1.Customer(name, city);
                }
            };
            exports_1("CustomerService", CustomerService);
        }
    };
});
