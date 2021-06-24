import { BaseView } from "./BaseView";
import { Customer } from "../models/index"

export class OrderCustomerView extends BaseView<Customer> {

  createTable(customer: Customer): void {
    this._element.innerHTML = this.tableCustomerTemplate(customer);
  }

  tableCustomerTemplate(customer: Customer): string {
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
}