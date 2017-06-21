"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var index_1 = require("./index");
var ComponentsSampleModule = (function () {
    function ComponentsSampleModule() {
    }
    return ComponentsSampleModule;
}());
ComponentsSampleModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            index_1.BookComponent,
            index_1.ChapterComponent,
            index_1.CounterComponent,
            index_1.CounterHostComponent,
            index_1.TimerComponent,
            index_1.TimerHostComponent,
            index_1.NameCardComponent,
            index_1.NameCardHostComponent,
            index_1.MessageBoxComponent,
            index_1.MessageBoxHostComponent
        ]
    })
], ComponentsSampleModule);
exports.ComponentsSampleModule = ComponentsSampleModule;
//# sourceMappingURL=components-samples.module.js.map