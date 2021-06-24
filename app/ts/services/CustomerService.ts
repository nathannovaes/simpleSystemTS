import { Customer } from "../models/index";
import { CustomerRepository } from "../repositories/index";

export class CustomerService {

  private _customerRepository: CustomerRepository;

  constructor(public customerRepository: CustomerRepository) {
    this._customerRepository = customerRepository;
  }
  
  create(name: string, city: string): Customer {

    if(name.length < 6) {
      throw new Error("Customer name is too short.");
    }
    
    return this._customerRepository.create(name, city);
  }

  getAll(): Array<Customer> {
    return this._customerRepository.getAll()
  }
}