System.register(["../models/index", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var index_1, BaseRepository_1, CustomerRepository;
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
            CustomerRepository = class CustomerRepository extends BaseRepository_1.BaseRepository {
                create(name, city) {
                    this._customer = new index_1.Customer(name, city);
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
