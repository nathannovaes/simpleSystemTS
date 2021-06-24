System.register(["./Customer", "./Product", "./Order", "./OrderProduct", "../repositories/BaseRepository"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Customer_1_1) {
                exportStar_1(Customer_1_1);
            },
            function (Product_1_1) {
                exportStar_1(Product_1_1);
            },
            function (Order_1_1) {
                exportStar_1(Order_1_1);
            },
            function (OrderProduct_1_1) {
                exportStar_1(OrderProduct_1_1);
            },
            function (BaseRepository_1_1) {
                exportStar_1(BaseRepository_1_1);
            }
        ],
        execute: function () {
        }
    };
});
