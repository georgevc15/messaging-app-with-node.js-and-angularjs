"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/Rx");
var rxjs_1 = require("rxjs");
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        this.messages.push(message);
        //console.log(this.messages);
        var body = JSON.stringify(message);
        return this.http.post('http://localhost:3000/message', body)
            .map(function (response) {
            _this.data = res.json();
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.getMessage = function () {
        return this.messages;
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
