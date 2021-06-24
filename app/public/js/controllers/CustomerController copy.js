System.register(["../repositories/index", "../services/index", "../views/CustomersView"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, CustomersView_1, CustomerController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (CustomersView_1_1) {
                CustomersView_1 = CustomersView_1_1;
            }
        ],
        execute: function () {
            CustomerController = class CustomerController {
                constructor() {
                    this._inputName = document.querySelector('#name');
                    this._inputCity = document.querySelector('#city');
                    this._customerService = new index_2.CustomerService(new index_1.CustomerRepository());
                    this._customersView = new CustomersView_1.CustomersView('#customersTable');
                }
                add(event) {
                    try {
                        event.preventDefault();
                        this._customerService.create(String(this._inputName.value), String(this._inputCity.value));
                        const customersCollection = this._customerService.getAll();
                        this._customersView.refreshTable(customersCollection);
                    }
                    catch (error) {
                        console.log('Error:', error.message);
                    }
                }
            };
            exports_1("CustomerController", CustomerController);
        }
    };
});
