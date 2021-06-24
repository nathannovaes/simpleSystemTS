import { BaseView } from "./BaseView";
import { Product } from "../models/index"

export class ProductsView extends BaseView<Product> {

  refreshTable(_collection: Array<Product>): void {
    this._element.innerHTML = this.tableTemplate(_collection);
  }

  tableTemplate(collection?: Array<Product>): string {
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
            ${collection ? collection.map( product => {
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
}