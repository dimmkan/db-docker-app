import { CrudService } from "./crud.service";
import { CreateCrudDto } from "./dto/createCrud.dto";
import { CrudEntity } from "./crud.entity";
import { DeleteResult } from "typeorm";
export declare class CrudController {
    private readonly crudService;
    constructor(crudService: CrudService);
    getAll(): Promise<CrudEntity[]>;
    createCrud(createCrudDto: CreateCrudDto): Promise<CrudEntity>;
    updateCrud(updateCrudDto: CreateCrudDto, id: number): Promise<CrudEntity>;
    deleteCrud(id: number): Promise<DeleteResult>;
}
