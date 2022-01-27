import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CrudService} from "./crud.service";
import {CreateCrudDto} from "./dto/createCrud.dto";
import {CrudEntity} from "./crud.entity";

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
    async updateCrud(@Body() updateCrudDto: CreateCrudDto, @Param() id: number): Promise<CrudEntity> {
        return await this.crudService.updateCrud(updateCrudDto, id);
    }
}
