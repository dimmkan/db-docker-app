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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("./crud.service");
const createCrud_dto_1 = require("./dto/createCrud.dto");
let CrudController = class CrudController {
    constructor(crudService) {
        this.crudService = crudService;
    }
    async getAll() {
        return await this.crudService.getAll();
    }
    async createCrud(createCrudDto) {
        return await this.crudService.createCrud(createCrudDto);
    }
    async updateCrud(updateCrudDto, id) {
        return await this.crudService.updateCrud(updateCrudDto, id);
    }
    async deleteCrud(id) {
        return await this.crudService.deleteCrud(id);
    }
};
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCrud_dto_1.CreateCrudDto]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "createCrud", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCrud_dto_1.CreateCrudDto, Number]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "updateCrud", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "deleteCrud", null);
CrudController = __decorate([
    (0, common_1.Controller)('crud'),
    __metadata("design:paramtypes", [crud_service_1.CrudService])
], CrudController);
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map