"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Block2Component = (function () {
    function Block2Component() {
        this.visible = false;
    }
    Block2Component.prototype.show = function () {
        this.visible = true;
    };
    return Block2Component;
}());
Block2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "block2",
        templateUrl: "block2.component.html"
    })
], Block2Component);
exports.Block2Component = Block2Component;
//# sourceMappingURL=block2.component.js.map