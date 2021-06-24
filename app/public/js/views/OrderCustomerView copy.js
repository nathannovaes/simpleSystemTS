System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var BaseView_1, CustomerView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            CustomerView = class CustomerView extends BaseView_1.BaseView {
                refreshTable(_collection) {
                    this._element.innerHTML = this.tableOrderProductsTemplate(_collection);
                }
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
            exports_1("CustomerView", CustomerView);
        }
    };
});
