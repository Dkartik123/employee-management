"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.EmployeesController = void 0;
var common_1 = require("@nestjs/common");
var EmployeesController = /** @class */ (function () {
    function EmployeesController(employeesService) {
        this.employeesService = employeesService;
    }
    EmployeesController.prototype.create = function (createEmployeeDto) {
        return this.employeesService.create(createEmployeeDto);
    };
    EmployeesController.prototype.findAll = function () {
        return this.employeesService.findAll();
    };
    EmployeesController.prototype.findOne = function (id) {
        return this.employeesService.findOne(+id);
    };
    EmployeesController.prototype.update = function (id, updateEmployeeDto) {
        return this.employeesService.update(+id, updateEmployeeDto);
    };
    EmployeesController.prototype.remove = function (id) {
        return this.employeesService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], EmployeesController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], EmployeesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], EmployeesController.prototype, "findOne");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], EmployeesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], EmployeesController.prototype, "remove");
    EmployeesController = __decorate([
        (0, common_1.Controller)('employees')
    ], EmployeesController);
    return EmployeesController;
}());
exports.EmployeesController = EmployeesController;
