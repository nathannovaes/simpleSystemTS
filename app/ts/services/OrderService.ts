import { Order } from "../models/index";
import { OrderRepository } from "../repositories/index";

export class OrderService {

  private _orderRepository: OrderRepository;

  constructor(public orderRepository: OrderRepository) {
    this._orderRepository = orderRepository;
  }
  create(customerId: number): Order {

    return this._orderRepository.create(customerId);
  }

  getAll(): Array<Order> {
    return this._orderRepository.getAll()
  }

  
}