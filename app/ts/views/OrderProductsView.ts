import { BaseView } from "./BaseView";
import { OrderProduct } from "../models/index"

export class OrderProductsView extends BaseView<OrderProduct> {

  refreshTable(_collection: Array<OrderProduct>): void {
    this._element.innerHTML = this.tableOrderProductsTemplate(_collection);
  }

  tableOrderProductsTemplate(collection?: Array<OrderProduct>): string {
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
          ${collection ? collection.map( orderProduct => {
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
}