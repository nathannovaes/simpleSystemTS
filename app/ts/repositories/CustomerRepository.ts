import { Customer } from "../models/index"
import { BaseRepository } from "./BaseRepository";

export class CustomerRepository extends BaseRepository<Customer> {
  private _customer : Customer;
  
  create(name: string, city: string): Customer {
    this._customer = new Customer(name, city);
    
    this.store(this._customer);
    
    return this._customer; 
  }

  store(customer: Customer): void {
    this.add(customer);
  }
}