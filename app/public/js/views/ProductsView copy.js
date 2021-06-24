System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var BaseView_1, ProductsView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            ProductsView = class ProductsView extends BaseView_1.BaseView {
                refreshTable(_collection) {
                    this._element.innerHTML = this.tableTemplate(_collection);
                }
                tableTemplate(collection) {
                    return `
      <h1>Lista de produtos</h1>
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Valor</th>
            </tr>
        </thead>
        
        <tbody>
            ${collection ? collection.map(product => {
                        return `
                <tr>
                  <td>${product.name}</td>
                  <td>R$ ${product.value}</td>
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
            exports_1("ProductsView", ProductsView);
        }
    };
});
