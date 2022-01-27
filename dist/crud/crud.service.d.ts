import { CrudEntity } from "./crud.entity";
import { Repository } from "typeorm";
export declare class CrudService {
    private readonly crudRepository;
    constructor(crudRepository: Repository<CrudEntity>);
    getAll(): Promise<CrudEntity[]>;
}
