"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Employee = void 0;
var typeorm_1 = require("typeorm");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Employee.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "firstName");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "lastName");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "dob");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "gender");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "education");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "company");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "experience");
    __decorate([
        (0, typeorm_1.Column)()
    ], Employee.prototype, "package");
    Employee = __decorate([
        (0, typeorm_1.Entity)()
    ], Employee);
    return Employee;
}());
exports.Employee = Employee;
