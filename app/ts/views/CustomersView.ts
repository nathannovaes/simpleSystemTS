import { BaseView } from "./BaseView";
import { Customer } from "../models/index"

export class CustomersView extends BaseView<Customer> {

  refreshTable(_collection: Array<Customer>): void {
    this._element.innerHTML = this.tableTemplate(_collection);
  }

  tableTemplate(collection?: Array<Customer>): string {
    return `
      <h1>Lista de clientes</h1>
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Cidade</th>
            </tr>
        </thead>
        
        <tbody>
            ${collection ? collection.map( customer => {
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
}