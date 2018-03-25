"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'app-authentication',
            template: "\n\t\t<header class=\"row spacing\">\n\t\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">Signup</a></li>\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['signin']\">Signin</a></li>\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['logout']\">Logout</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t</header>\n\t\t<div class=\"row spacing\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
        })
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
