System.register([], function (exports_1, context_1) {
    "use strict";
    var OrderService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            OrderService = class OrderService {
                constructor(orderRepository) {
                    this.orderRepository = orderRepository;
                    this._orderRepository = orderRepository;
                }
                create(customerId) {
                    return this._orderRepository.create(customerId);
                }
                getAll() {
                    return this._orderRepository.getAll();
                }
            };
            exports_1("OrderService", OrderService);
        }
    };
});
