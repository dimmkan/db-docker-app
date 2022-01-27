import { CrudService } from "./crud.service";
export declare class CrudController {
    private readonly crudService;
    constructor(crudService: CrudService);
    getAll(): Promise<import("./crud.entity").CrudEntity[]>;
}
