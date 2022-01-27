import { CrudEntity } from "./crud.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateCrudDto } from "./dto/createCrud.dto";
export declare class CrudService {
    private readonly crudRepository;
    constructor(crudRepository: Repository<CrudEntity>);
    getAll(): Promise<CrudEntity[]>;
    createCrud(createCrudDto: CreateCrudDto): Promise<CrudEntity>;
    updateCrud(updateCrudDto: CreateCrudDto, id: number): Promise<CrudEntity>;
    deleteCrud(id: number): Promise<DeleteResult>;
}
