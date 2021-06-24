import { Product } from "../models/index";
import { ProductRepository } from "../repositories/index";

export class ProductService {

  private _productRepository: ProductRepository;

  constructor(public productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }
  
  create(name: string, value: number): Product {
    return this._productRepository.create(name, value);
  }

  getAll(): Array<Product> {
    return this._productRepository.getAll()
  }
}