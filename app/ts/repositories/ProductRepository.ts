import { Product } from "../models/index"
import { BaseRepository } from "./BaseRepository";

export class ProductRepository extends BaseRepository<Product> {
  private _product : Product;
  
  create(name: string, value: number): Product {
    this._product = new Product(name, value);
    
    this.store(this._product);
    
    return this._product; 
  }

  store(product: Product): void {
    this.add(product);
  }
}