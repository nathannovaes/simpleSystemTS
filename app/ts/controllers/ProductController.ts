import { ProductRepository } from "../repositories/index";
import { ProductService } from "../services/index";
import { ProductsView } from "../views/ProductsView";

export class ProductController {
  private _inputName: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _productService: ProductService;
  private _productsView: ProductsView;

  constructor() {
    this._inputName      = <HTMLInputElement>document.querySelector('#product-name');
    this._inputValue     = <HTMLInputElement>document.querySelector('#product-value');
    this._productService = new ProductService(new ProductRepository());
    this._productsView   = new ProductsView('#productsTable');
  }

  add(event: Event) {
    try {
      event.preventDefault();

      this._productService.create(String(this._inputName.value), Number(this._inputValue.value));

      const productsCollection = this._productService.getAll();

      this._productsView.refreshTable(productsCollection);

    } catch (error) {
      console.log('Error:', error.message);
    }
  }
}