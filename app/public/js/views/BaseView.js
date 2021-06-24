System.register([], function (exports_1, context_1) {
    "use strict";
    var BaseView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BaseView = class BaseView {
                constructor(elementName) {
                    this._element = document.querySelector(elementName);
                }
            };
            exports_1("BaseView", BaseView);
        }
    };
});
