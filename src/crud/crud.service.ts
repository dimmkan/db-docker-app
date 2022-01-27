import { Injectable } from '@nestjs/common';
import {CrudEntity} from "./crud.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateCrudDto} from "./dto/createCrud.dto";

@Injectable()
export class CrudService {
    constructor(@InjectRepository(CrudEntity)
                private readonly crudRepository: Repository<CrudEntity>,
    ) {
    }
    async getAll(): Promise<CrudEntity[]> {
        return await this.crudRepository.find();
    }

    async createCrud(createCrudDto: CreateCrudDto): Promise<CrudEntity> {
        const newCrud = new CrudEntity();
        Object.assign(newCrud, createCrudDto);
        return await this.crudRepository.save(newCrud);
    }

    async updateCrud(updateCrudDto: CreateCrudDto, id: number): Promise<CrudEntity> {
        const crud = await this.crudRepository.findOne({id});
        Object.assign(crud, updateCrudDto);
        return await this.crudRepository.save(crud);
    }
}
