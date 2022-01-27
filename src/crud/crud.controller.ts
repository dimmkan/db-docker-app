import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CrudService} from "./crud.service";
import {CreateCrudDto} from "./dto/createCrud.dto";
import {CrudEntity} from "./crud.entity";
import {DeleteResult} from "typeorm";

@Controller('crud')
export class CrudController {
    constructor(private readonly crudService: CrudService) {
    }

    @Get('get')
    async getAll(): Promise<CrudEntity[]>{
        return await this.crudService.getAll();
    }

    @Post('add')
    async createCrud(@Body() createCrudDto: CreateCrudDto): Promise<CrudEntity> {
        return await this.crudService.createCrud(createCrudDto);
    }

    @Put('update/:id')
    async updateCrud(@Body() updateCrudDto: CreateCrudDto, @Param('id') id: number): Promise<CrudEntity> {
        return await this.crudService.updateCrud(updateCrudDto, id);
    }

    @Delete('delete/:id')
    async deleteCrud(@Param('id') id: number): Promise<DeleteResult> {
        return await this.crudService.deleteCrud(id);
    }
}
