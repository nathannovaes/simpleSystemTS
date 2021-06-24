System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var BaseView_1, OrderCustomerView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            OrderCustomerView = class OrderCustomerView extends BaseView_1.BaseView {
                createTable(customer) {
                    this._element.innerHTML = this.tableCustomerTemplate(customer);
                }
                tableCustomerTemplate(customer) {
                    return `
      <h1>Pedido</h1>
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nome do cliente</th>
                <th>Cidade</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
              <td>${customer.name}</td>
              <td>${customer.city}</td>
            </tr>  
        </tbody>
        
        <tfoot>
        </tfoot>
      </table>
    `;
                }
            };
            exports_1("OrderCustomerView", OrderCustomerView);
        }
    };
});
