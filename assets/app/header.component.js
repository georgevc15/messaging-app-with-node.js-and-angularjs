"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n\t\t<header class=\"row\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/messages']\">Messenger</a></li>\n\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Authetication</a></li>\n\t\t\t\t</ul>\n\t\t\t </nav>\t\n\t\t</header>\n\t"
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
