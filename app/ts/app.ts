import { CustomerController, ProductController } from "./controllers/index";


// Customer 
const customerController = new CustomerController();
document
  .querySelector('#form-customer')
  .addEventListener('submit', customerController.add.bind(customerController));

// Product
const productController = new ProductController();
document
  .querySelector('#form-product')
  .addEventListener('submit', productController.add.bind(productController));



