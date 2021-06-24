System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var BaseView_1, CustomersView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            CustomersView = class CustomersView extends BaseView_1.BaseView {
                refreshTable(_collection) {
                    this._element.innerHTML = this.tableTemplate(_collection);
                }
                tableTemplate(collection) {
                    return `
      <h1>Lista de cliente</h1>
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Cidade</th>
            </tr>
        </thead>
        
        <tbody>
            ${collection ? collection.map(customer => {
                        return `
                <tr>
                  <td>${customer.name}</td>
                  <td>${customer.city}</td>
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
            exports_1("CustomersView", CustomersView);
        }
    };
});
