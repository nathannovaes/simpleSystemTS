System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var BaseView_1, OrderProductsView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            OrderProductsView = class OrderProductsView extends BaseView_1.BaseView {
                refreshTable(_collection) {
                    this._element.innerHTML = this.tableOrderProductsTemplate(_collection);
                }
                tableOrderProductsTemplate(collection) {
                    return `
    <h1>Lista de produtos</h1>
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Total</th>
          </tr>
      </thead>
      
      <tbody>
          ${collection ? collection.map(orderProduct => {
                        return `
              <tr>
                <td>${orderProduct.name}</td>
                <td>R$ ${orderProduct.value}</td>
                <td>${orderProduct.quantity} un</td>
                <td>R$ ${orderProduct.total}</td>
              </tr>  
            `;
                    }).join('') : ''}
      </tbody>
      
      <tfoot>
      </tfoot>
    </table>
    `;
                }
            };
            exports_1("OrderProductsView", OrderProductsView);
        }
    };
});
