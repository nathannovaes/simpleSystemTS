import { Order } from "../models/index"
import { BaseRepository } from "./BaseRepository";

export class OrderRepository extends BaseRepository<Order> {
  private _order : Order;
  
  create(customerId: number): Order {
    this._order = new Order(customerId);
    
    this.store(this._order);
    
    return this._order; 
  }

  store(order: Order): void {
    this.add(order);
  }
}