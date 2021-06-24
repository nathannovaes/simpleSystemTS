System.register([], function (exports_1, context_1) {
    "use strict";
    var CustomerService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CustomerService = class CustomerService {
                constructor(customerRepository) {
                    this.customerRepository = customerRepository;
                    this._customerRepository = customerRepository;
                }
                create(name, city) {
                    if (name.length < 6) {
                        throw new Error("Customer name is too short.");
                    }
                    return this._customerRepository.create(name, city);
                }
                getAll() {
                    return this._customerRepository.getAll();
                }
            };
            exports_1("CustomerService", CustomerService);
        }
    };
});
