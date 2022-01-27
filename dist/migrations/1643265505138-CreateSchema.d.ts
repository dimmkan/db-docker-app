import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateSchema1643265505138 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
