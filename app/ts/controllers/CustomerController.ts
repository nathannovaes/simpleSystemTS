import { CustomerRepository } from "../repositories/index";
import { CustomerService } from "../services/index";
import { CustomersView } from "../views/CustomersView";

export class CustomerController {
  private _inputName: HTMLInputElement;
  private _inputCity: HTMLInputElement;
  public _customerService: CustomerService;
  private _customersView: CustomersView;

  constructor() {
    this._inputName       = <HTMLInputElement>document.querySelector('#customer-name');
    this._inputCity       = <HTMLInputElement>document.querySelector('#customer-city');
    this._customerService = new CustomerService(new CustomerRepository());
    this._customersView   = new CustomersView('#customersTable');
  }

  add(event: Event) {
    try {
      event.preventDefault();

      this._customerService.create(String(this._inputName.value), String(this._inputCity.value));

      const customersCollection = this._customerService.getAll();

      this._customersView.refreshTable(customersCollection);

    } catch (error) {
      console.log('Error:', error.message);
    }
  }
}