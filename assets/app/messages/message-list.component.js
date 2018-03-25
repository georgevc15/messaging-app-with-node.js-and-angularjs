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
var core_1 = require("@angular/core");
var message_service_1 = require("./message.service");
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(messageservice) {
        this.messageservice = messageservice;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messages = this.messageservice.getMessage();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'app-message-list',
            template: "\n\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t<app-message\n\t\t\t\t *ngFor=\"let message of messages\"\n\t\t\t\t [message]=\"message\" (editClicked)=\"message.content = $event\">\t\n\t\t\t</app-message>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;
