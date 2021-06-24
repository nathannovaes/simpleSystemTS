System.register(["../models/index", "./BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var index_1, BaseRepository_1, OrderRepository;
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
            OrderRepository = class OrderRepository extends BaseRepository_1.BaseRepository {
                create(customerId) {
                    this._order = new index_1.Order(customerId);
                    this.store(this._order);
                    return this._order;
                }
                store(order) {
                    this.add(order);
                }
            };
            exports_1("OrderRepository", OrderRepository);
        }
    };
});
