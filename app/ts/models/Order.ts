import { OrderProduct } from "./OrderProduct";

export class Order {
  constructor(
    readonly customerId: number, 
    readonly orderProducts?: Array<OrderProduct>
  ){};
}