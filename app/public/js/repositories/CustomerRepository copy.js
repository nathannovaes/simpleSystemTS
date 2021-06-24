System.register(["../models/Customer", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var Customer_1, BaseRepository_1, CustomerRepository;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (BaseRepository_1_1) {
                BaseRepository_1 = BaseRepository_1_1;
            }
        ],
        execute: function () {
            CustomerRepository = class CustomerRepository extends BaseRepository_1.BaseRepository {
                create(name, city) {
                    this._customer = new Customer_1.Customer(name, city);
                    this.store(this._customer);
                    return this._customer;
                }
                store(customer) {
                    this.add(customer);
                }
            };
            exports_1("CustomerRepository", CustomerRepository);
        }
    };
});
