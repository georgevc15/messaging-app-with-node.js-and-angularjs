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
var message_model_1 = require("./message.model");
var message_service_1 = require("./message.service");
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        this.editClicked.emit('This is a new value');
    };
    MessageComponent.prototype.onDelete = function () {
        this.messageService.deleteMessage(this.message);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", message_model_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'app-message',
            templateUrl: './message.component.html',
            styleUrls: ['./message.component.css']
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
