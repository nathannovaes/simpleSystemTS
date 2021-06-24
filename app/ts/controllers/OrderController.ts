import { Order } from "../models/Order";
import { CustomerRepository, OrderRepository } from "../repositories/index";
import { CustomerService, OrderService } from "../services/index";
import { OrderCustomerView } from "../views/OrderCustomerView";

export class OrderController {
  private _inputOrderCustomerId: HTMLInputElement;
  private _orderService: OrderService;
  private _ordersCustomerView: OrderCustomerView;
  protected _createdOrder: Order;

  constructor() {
    this._inputOrderCustomerId  = <HTMLInputElement>document.querySelector('#customer-id');
    this._orderService          = new OrderService(new OrderRepository());
    this._ordersCustomerView    = new OrderCustomerView('#orderCustomerTable');
  }

  add(event: Event) {
    try {
      event.preventDefault();

      this._createdOrder = this._orderService.create(Number(this._inputOrderCustomerId.value));


      // const ordersCustomerCollection = this._orderService.getAll();

      // const customerId = ordersCustomerCollection.indexOf(this._createdOrder);

      // this._ordersCustomerView.createTable(this._createdOrder);

    } catch (error) {
      console.log('Error:', error.message);
    }
  }
}