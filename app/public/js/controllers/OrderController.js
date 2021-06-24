System.register(["../repositories/index", "../services/index", "../views/OrderCustomerView"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, OrderCustomerView_1, OrderController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (OrderCustomerView_1_1) {
                OrderCustomerView_1 = OrderCustomerView_1_1;
            }
        ],
        execute: function () {
            OrderController = class OrderController {
                constructor() {
                    this._inputOrderCustomerId = document.querySelector('#customer-id');
                    this._orderService = new index_2.OrderService(new index_1.OrderRepository());
                    this._ordersCustomerView = new OrderCustomerView_1.OrderCustomerView('#orderCustomerTable');
                }
                add(event) {
                    try {
                        event.preventDefault();
                        this._createdOrder = this._orderService.create(Number(this._inputOrderCustomerId.value));
                    }
                    catch (error) {
                        console.log('Error:', error.message);
                    }
                }
            };
            exports_1("OrderController", OrderController);
        }
    };
});
